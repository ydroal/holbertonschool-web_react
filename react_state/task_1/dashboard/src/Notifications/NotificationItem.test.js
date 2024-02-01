import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils} from 'aphrodite';
import NotificationItem from './NotificationItem';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem id={1} type="default" value="New course available" />);
  });

  it('renders the correct html by props', () => {
    const wrapper = shallow(<NotificationItem id={1} type="default" value="New course available" />);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.text()).toBe('New course available');
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });

  it('renders correctly with dangerouslySetInnerHTML', () => {
    const html = { __html: '<ul>test</ul>' };
    const wrapper = shallow(<NotificationItem id={1} html={html} />);
    expect(wrapper.html()).toContain('<ul>test</ul>');
  });

  it('calls markAsRead with the right ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(
      <NotificationItem type="default" value="New course available" id={1} markAsRead={markAsReadSpy} />
    );
    // リストアイテムのクリックイベントをシミュレート
    wrapper.find('li').simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});