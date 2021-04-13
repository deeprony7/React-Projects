import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

interface PostListProps {
  fetchPosts: () => Promise<void>;
  posts: PostItem[];
}

interface PostItem {
  body: string;
  id: number;
  title: string;
  userId: number;
}

class PostList extends Component<PostListProps> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <h2>{post.body}</h2>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPosts: fetchPosts,
})(PostList);
