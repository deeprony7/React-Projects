import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { useEffect } from "react";

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  return <div>StreamList</div>;
};

export default connect(null, { fetchStreams })(StreamList);
