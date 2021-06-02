import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { useEffect } from "react";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    if (stream.userId === props.CurrentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    CurrentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
