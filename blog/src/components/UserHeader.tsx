import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";

interface UserHeaderProps {
  userId: number;
  fetchUser: (userId: number) => any;
  user: User;
}

interface User {
  id: number;
  name: string;
}

class UserHeader extends Component<UserHeaderProps> {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.users.find((user: User) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
