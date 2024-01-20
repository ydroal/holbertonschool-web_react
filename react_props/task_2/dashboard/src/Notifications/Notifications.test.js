import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders NotificationItem elements', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the correct html for the first NotificationItem', () => {
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.props().value).toBe('New course available');
    expect(firstItem.props().type).toBe('default');
  });
});