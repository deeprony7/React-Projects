import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

interface PostListProps {
  fetchPosts: () => Promise<void>;
  posts: any;
}

class PostList extends Component<PostListProps> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>Post List</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPosts: fetchPosts,
})(PostList);
