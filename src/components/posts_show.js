import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!this.props.post) {
      const { postId } = this.props.match.params;
      this.props.fetchPost(postId);
    }
  }

  onDelete() {
    const { postId } = this.props.match.params;
    this.props.deletePost(postId, () => {
      this.props.history.push('/');//navigate to the posts index
    });
  }

  render() {
    if(!this.props.post) {
      return (
        <div>Loading ...</div>
      );
    }
    const { post } = this.props;
    return (
      <div>
        <div>
          <Link to="/">
            Back to posts!
          </Link>
          <button onClick={this.onDelete.bind(this)} className="btn btn-danger pull-xs-right">Delete the post</button>
        </div>
        <h3>{ post.title }</h3>
        <h6>Categories : { post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.postId] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
