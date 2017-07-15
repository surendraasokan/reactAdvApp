import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Chart from '../../src/components/chart';

describe('tests for the chart component',() => {
  const props = {
    data: [200,20,55],
    units: "K",
    color: "blue"
  };
  const container = shallow(<Chart {...props}/>);

  it('test for Sparklines to be present',() => {
    expect(container.find('Sparklines').exists()).toBe(true);
  });

  it('test value for Sparklines data',() => {
    expect(container.find('Sparklines').prop('data')).toEqual([200,20,55]);
    expect(container.find('SparklinesLine').prop('color')).toEqual("blue");
  });

});
