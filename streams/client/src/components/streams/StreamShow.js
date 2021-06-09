import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

const StreamShow = ({ fetchStream, match, stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef);
    const { id } = match.params;

    fetchStream(id);
  }, [match.params.id]);

  useEffect(() => {
    const buildPlayer = () => {
      if (!stream) {
        return;
      }
      const { id } = match.params;

      const player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    };
    buildPlayer();
  }, [stream, match.params.id]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
