import { mount } from 'enzyme';
import React, { Component } from 'react';
import PostsIndex from '../../src/containers/posts_index';

describe('tests for the PostsIndex component',() => {
  const wrapper = mount(<PostsIndex />);

  it('test for calling componentDidMount fn', () => {
    PostsIndex.prototype.componentDidMount = jest.fn();
    expect(PostsIndex.prototype.componentDidMount.calledOnce).toEqual(true);
  });
});
