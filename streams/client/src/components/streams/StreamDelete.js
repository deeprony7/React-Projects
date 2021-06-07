import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const renderActions = (
    <div>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </div>
  );

  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delet this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${props.stream.title}`;
  };

  return (
    <>
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={renderActions}
        onDismiss={() => history.push("/")}
      />
      {renderContent}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
