import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

const mockStore = configureStore([thunk]);


describe('uiAction Creators', () => {
  it('login should create LOGIN action', () => {
    const email = 'test@mail.com';
    const password = 'testpass';
    expect(login(email, password)).toEqual({ type: LOGIN, user: { email, password }});
  })

  it('logout should create LOGOUT action', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('displayNotificationDrawer should create DISPLAY_NOTIFICATION_DRAWER action', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('hideNotificationDrawer should create HIDE_NOTIFICATION_DRAWER action', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

describe('loginRequest action creator', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    fetchMock.restore(); 
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when login is successful', async () => {
    fetchMock.postOnce('../../dist/login-success.json', {
      body: { user: { email: 'test@mail.com', password: 'testpassword' } },
      headers: { 'content-type': 'application/json' },
      status: 200 
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@mail.com', password: 'testpassword' }},
      { type: LOGIN_SUCCESS }
    ];

    await store.dispatch(loginRequest('test@mail.com', 'testpassword'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when login fails', async () => {
    fetchMock.postOnce('../../dist/login-success.json', {
      throws: new Error('Login failed'), // fetchが失敗するように設定
      status: 400 
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'fail@mail.com', password: 'failpass' }},
      { type: LOGIN_FAILURE }
    ];

    await store.dispatch(loginRequest('fail@mail.com', 'failpass'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

