import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  describe('displayDrawer is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications />);
    });

    it('the menu item is being displayed when displayDrawer is false', () => {
      expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notifications is not being displayed', () => {
      expect(wrapper.find('.Notifications').exists()).toBe(false);
    });
  });

  describe('displayDrawer is true', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} />);
    });
  
    it('the menu item is being displayed when displayDrawer is true', () => {
      expect(wrapper.find('.menuItem').exists()).toBe(true);
    });
    
    it('div.Notifications is being displayed', () => {
      expect(wrapper.find('.Notifications').exists()).toBe(true);
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
});