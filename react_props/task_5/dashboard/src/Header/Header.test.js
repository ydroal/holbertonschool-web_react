import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders a img tag', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('renders a h1 tag', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });
});

