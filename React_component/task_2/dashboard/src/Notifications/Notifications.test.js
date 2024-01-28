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

  describe('markAsRead', () => {
    it('calls console.log with the right message when markAsRead is called', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const wrapper = shallow(<Notifications />);
      const instance = wrapper.instance();

      const mockId = 1;
      instance.markAsRead(mockId);
      expect(consoleSpy).toHaveBeenCalledWith(`Notification ${mockId} has been marked as read`);
      consoleSpy.mockRestore();
    });
  });

  describe('displayDrawer is true', () => {
    let wrapper;
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
    ];
  
    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });
  
    it('the menu item is being displayed when displayDrawer is true', () => {
      expect(wrapper.find('.menuItem').exists()).toBe(true);
    });
    
    it('div.Notifications is being displayed', () => {
      expect(wrapper.find('.Notifications').exists()).toBe(true);
    });

    it('renders NotificationItem elements', () => {
      // id プロパティが各 NotificationItem に含まれていることを確認
      expect(wrapper.find(NotificationItem).at(0).prop('id')).toBe(1);
    });

    it('renders the correct html for the first NotificationItem', () => {
      const firstItem = wrapper.find(NotificationItem).first();
      expect(firstItem.props().value).toBe('New course available');
      expect(firstItem.props().type).toBe('default');
    });
  }); 
  
  // listNotificationsが渡されない場合
  describe('listNotifications not passed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} />);
    });

    it('does not render "Here is the list of notifications" when listNotifications is empty', () => {
      const emptyWrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
      expect(emptyWrapper.find('.Notifications p').exists()).toBe(false);
    });

    it('renders correctly when listNotifications is not passed', () => {
      expect(wrapper.find(NotificationItem).length).toBe(1);
      expect(wrapper.find(NotificationItem).at(0).props().value).toBe('No new notification for now');
    });
  });
});