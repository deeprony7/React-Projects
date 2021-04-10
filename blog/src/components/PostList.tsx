import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

interface PostListProps {
    fetchPosts: () => Promise<void>
    // fetchPosts: () => {
    //     type: string,
    //     payload: any
    // }
}

class PostList extends Component<PostListProps> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Post List
            </div>
        )
    }
}


export default connect(null, {
    fetchPosts: fetchPosts
})(PostList);
