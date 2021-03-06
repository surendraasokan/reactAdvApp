import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost() {
      return _.map(this.props.posts, post => {
            const postId = `/posts/${post.id}`;
            return (
              <li className="list-group-item" key={post.id}>
                <Link to={postId}>{post.title}</Link>
              </li>
            );
        });
  }


  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="weather">
            Weather Forecast
          </Link>
          <Link className="btn btn-primary" to="posts/new">
            Add a post!
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPost()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
      return { posts };
 }

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
