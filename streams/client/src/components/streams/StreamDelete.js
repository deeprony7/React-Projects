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

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={renderActions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default connect(null, { fetchStream })(StreamDelete);
