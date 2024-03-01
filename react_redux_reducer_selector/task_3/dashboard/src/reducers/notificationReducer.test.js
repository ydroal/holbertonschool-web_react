import notificationReducer from './notificationReducer.js';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

const initialState = {
  filter: 'DEFAULT',
  notifications: []
};

describe('notificationReducer', () => {
  it('default state should returns an empty array', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('FETCH_NOTIFICATIONS_SUCCESS should returns the data passed', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" }
      ]
    };
    const expectedState = {
      ...initialState,
      notifications: action.data.map(notification => ({
        ...notification,
        isRead: false
      }))
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it(' MARK_AS_READ should mark the correct notification as read', () => {
    const action = { type: MARK_AS_READ, index: 2 };
    const updatedState = {
      ...initialState,
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };
    const expectedState = {
      ...updatedState,
      notifications: updatedState.notifications.map(notification =>
        notification.id === action.index ? { ...notification, isRead: true } : notification
      )
    };
    const state = notificationReducer(updatedState, action);
    expect(state).toEqual(expectedState);
  });

  it('SET_TYPE_FILTER should correctly set the filter', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      ...initialState,
      filter: action.filter
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});