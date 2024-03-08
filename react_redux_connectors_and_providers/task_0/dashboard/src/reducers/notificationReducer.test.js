import { Map, List, fromJS } from 'immutable';
import { notificationReducer, initialState } from './notificationReducer.js';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
  it('default state should returns an empty array', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('FETCH_NOTIFICATIONS_SUCCESS should returns the data passed', () => {
    // アクションで使用するnotificationデータ
    const actionData = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" }
    ];
  
    // アクションの準備
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: actionData,
    };
  
    // アクションを適用してステートを更新
    const updatedStateResult = notificationReducer(initialState, action).get('entities').get('notifications');

    // 正規化されたデータをシミュレート
    const normalizedData = notificationsNormalizer(actionData.map(notification => ({
      ...notification,
      isRead: false
    })));

    // 期待されるステートを構築
    const expectedStateResult = fromJS(normalizedData.entities.notifications);

    // entities.notifications のみを比較
    expect(updatedStateResult).toEqual(expectedStateResult.toJS());
  });
  
  it('MARK_AS_READ should mark the correct notification as read', () => {
    const loadedState = notificationReducer(initialState, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" }
      ]
    });
    const action = { type: MARK_AS_READ, index: 2 };
    const updatedState = notificationReducer(loadedState, action);

    const isReadStatus = updatedState.getIn(['entities', 'notifications', String(action.index), 'isRead']);
    expect(isReadStatus).toEqual(true);
  });

  it('SET_TYPE_FILTER should correctly set the filter', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = initialState.set('filter', action.filter);
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
