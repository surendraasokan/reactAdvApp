import React, { Component } from 'react';
import { shallow,mount } from 'enzyme';
import SearchBar from '../../src/containers/search_bar';

xdescribe('tests for <SearchBar> container', () => {
  const props = {
    fetchWeather: jest.fn()
  };

  const container = shallow(<SearchBar />);
  xit('test for form present', () => {
    expect(container.find('form').length).to.equal(1);
  });
});
