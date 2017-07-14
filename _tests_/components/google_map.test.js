import React, { Component } from 'react';
import { shallow} from 'enzyme';
import GoogleMap from '../../src/components/googleMap';

describe('test the google map component',() => {
  const props = {
    lat: 211,
    lon: 210
  };
  const container = shallow(<GoogleMap {...props}/>);

  it('test for <div> to be present',() => {
    expect(container.find('div').length).toEqual(1);
  });
});
