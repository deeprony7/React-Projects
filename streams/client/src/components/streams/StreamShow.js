import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

const StreamShow = ({ fetchStream, match, stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const {id} = match.params

    fetchStream(id);
    const player = flv.createPlayer({
      type: 'flv',
      url: 'http://localhost:8000/live'
    })
    player.attachMediaElement(videoRef.current)
    player.load()
  }, []);

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
