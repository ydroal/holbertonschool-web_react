import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="New course available" />);
  });

  it('renders the correct html by props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="New course available" />);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.text()).toBe('New course available');
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });

  it('renders correctly with dangerouslySetInnerHTML', () => {
    const html = { __html: '<ul>test</ul>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.html()).toContain('<ul>test</ul>');
    
  });
  
});