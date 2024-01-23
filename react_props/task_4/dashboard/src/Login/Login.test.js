import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders a two input tag', () => {
    expect(wrapper.find('input').length).toBe(2);
  });

  it('renders a two label tag', () => {
    expect(wrapper.find('label').length).toBe(2);
  });
});