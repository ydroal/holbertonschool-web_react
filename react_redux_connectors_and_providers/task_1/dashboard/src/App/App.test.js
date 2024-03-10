import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils, css } from 'aphrodite';
import { fromJS } from 'immutable';
import ConnectedApp, { App, mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import Footer from '../Footer/Footer';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const initialState = fromJS({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    // Reduxの状態構造をシミュレーション
    const mockProps = mapStateToProps(initialState);
    const mockFunctions = {
      displayNotificationDrawer: jest.fn(),
      hideNotificationDrawer: jest.fn(),
    };

    wrapper = shallow(<App {...mockProps} {...mockFunctions} />);
  });


  it('contain the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contain the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('does not display CourseList when isLoggedIn is false(default)', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('contain the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('logOut', () => {
    // mapStateToPropsを使ってテスト用のpropsを生成
    const mockProps = mapStateToProps(/* 必要に応じて適切な状態をここに渡す */);
    // テスト固有のpropsを設定
    const testSpecificProps = {
      logOut: jest.fn(),
      displayNotificationDrawer: jest.fn(),
      hideNotificationDrawer: jest.fn(),
    };
    // 必要なpropsをAppコンポーネントに渡す
    const wrapper = shallow(<App {...mockProps} {...testSpecificProps} />);
    expect(wrapper.exists()).toBe(true);
    // 他のアサーションを追加...
  });

  // 追加
  it('default state for isLoggedIn is false', () => {
    expect(wrapper.state('user').isLoggedIn).toEqual(false);
  });

  // 追加
  it('logIn function updates the state correctly', () => {
    const email = 'user@example.com';
    const password = 'password';
    wrapper.instance().logIn(email, password);
    expect(wrapper.state('user')).toEqual({
      email,
      password,
      isLoggedIn: true,
    });
  });

  // 追加
  it('logOut function updates the state correctly', () => {
    // Assuming logIn is required before logOut
    wrapper.instance().logIn('user@example.com', 'password');
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });

  it('markNotificationAsRead removes the notification from the list', () => {
    const testNotifications = [
      { id: 1, value: "New course available" },
      { id: 2, value: "New resume available" },
      { id: 3, value: "Urgent requirement" }
    ];
  
    wrapper.setState({ listNotifications: testNotifications });
  
    wrapper.instance().markNotificationAsRead(2);
  
    const expectedNotifications = [
      { id: 1, value: "New course available" },
      { id: 3, value: "Urgent requirement" }
    ];
  
    expect(wrapper.state('listNotifications')).toEqual(expectedNotifications);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  // displayDrawer のテスト
  it('displayDrawer prop matches the Redux state', () => {
    expect(wrapper.prop('displayDrawer')).toEqual(initialState.get('isNotificationDrawerVisible'));
  });

  // isLoggedIn のテスト
  it('isLoggedIn prop matches the Redux state', () => {
    expect(wrapper.prop('isLoggedIn')).toEqual(initialState.get('isUserLoggedIn'));
  });
});

describe('mapStateToProps', () => {
  it('should return { isLoggedIn: true } for isUserLoggedIn: true in state', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
  });

  it('should map state to props correctly', () => {
    const mockState = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
    };
    expect(mapStateToProps(mockState)).toEqual(expectedProps);
  });
});
