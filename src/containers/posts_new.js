import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class PostNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const formClassName = `form-group ${ touched && error ? 'has-danger' : ''}`;
    return (
      <div className={formClassName}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
          />
          <div className="text-help">
            { touched ? error : '' }
          </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="text-xs-right">

        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title for post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />
          <div className="">
            <button type="submit" className="btn btn-summary">Submit</button>
            <Link to="/" className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  //values - { title: 'a123', categories: 'b123', content: 'c123'}
  const error = {};

  if(!values.title) {
    error.title = "Enter title for post save";
  }

  if(!values.categories) {
    error.categories = "Enter categories for post save";
  }

  if(!values.content) {
    error.content = "Enter content for post save";
  }

  return error;
}

export default reduxForm({
  validate: validate,
  form: 'PostNewForm'
})(
  connect(null,{ createPost })(PostNew)
);
