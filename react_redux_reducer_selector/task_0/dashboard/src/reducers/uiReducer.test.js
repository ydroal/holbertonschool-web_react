import { initialState, uiReducer } from './uiReducer.js';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    // Reduxでは、アプリケーションの初期起動時に各リデューサーが初期ステートを設定するために、
    // 最初のアクションとしてundefinedステートをリデューサーに渡す。
    // リデューサーは初期ステートを返すことが期待される
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    // SELECT_COURSEはuiReducerでは処理されないので、現在の状態を返す
    const selectCourseAction = { type: 'SELECT_COURSE' };
    const state = uiReducer(initialState, selectCourseAction);
    expect(state).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const displayNotificationDrawerAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, displayNotificationDrawerAction);
    expect(newState).toEqual({ ...initialState, isNotificationDrawerVisible: true });
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    // isNotificationDrawerVisibleがtrueになるように状態を変更する。
    const stateDrawerVisible = { ...initialState, isNotificationDrawerVisible: true };
    const hideNotificationDrawerAction = { type: HIDE_NOTIFICATION_DRAWER };
    const newState = uiReducer(stateDrawerVisible, hideNotificationDrawerAction);
    expect(newState).toEqual({ ...initialState, isNotificationDrawerVisible: false });
  });
});