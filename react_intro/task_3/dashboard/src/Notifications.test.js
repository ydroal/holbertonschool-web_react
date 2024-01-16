import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    expect(wrapper.find('li').length).toBe(3);
  });

  it('renders the correct text', () => {
    expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
  });
});