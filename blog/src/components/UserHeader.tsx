import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

interface UserHeaderProps {
  userId: number;
  fetchUser: (userId: number) => Promise<void>;
  user: User;
}

interface User {
  id: number;
  name: string;
}

class UserHeader extends Component<UserHeaderProps> {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

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

export default connect(mapStateToProps, {
  fetchUser: fetchUser,
})(UserHeader);
