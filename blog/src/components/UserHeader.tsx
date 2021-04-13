import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

interface UserHeaderProps {
  userId: number;
  fetchUser: (userId: number) => Promise<void>;
}

class UserHeader extends Component<UserHeaderProps> {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>User Header</div>;
  }
}

export default connect(null, {
  fetchUser: fetchUser,
})(UserHeader);
