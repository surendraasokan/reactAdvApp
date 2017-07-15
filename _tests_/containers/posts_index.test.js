import { mount } from 'enzyme';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createStore } from 'redux';
import { hashHistory } from 'react-router-dom';
import PostsIndex from '../../src/containers/posts_index';

describe('tests for the PostsIndex component',() => {
  const props = {
    posts: [
      {id:121, title:"Test one"},
      {id:122, title:"Test two"}
    ]
  };
  let store = createStore(() => ({}), ['Use Redux']);
  const wrapper = mount(<PostsIndex history={hashHistory} {...props} store={store}/>);

  it('test for calling componentDidMount fn', () => {
    PostsIndex.prototype.componentDidMount = jest.fn();
    expect(PostsIndex.prototype.componentDidMount.calledOnce).toEqual(true);
  });
});
