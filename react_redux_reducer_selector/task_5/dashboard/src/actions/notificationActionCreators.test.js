import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { markAsread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

const mockStore = configureStore([thunk]);

describe('Notification Action Creators', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('markAsread should create MARK_AS_READ action', () => {
    store.dispatch(markAsread(1));
    expect(store.getActions()).toEqual([{ type: MARK_AS_READ, index: 1 }]);
  })

  it('setNotificationFilter should create SET_TYPE_FILTER action', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    store.dispatch(setNotificationFilter(filter));
    expect(store.getActions()).toEqual([{ type: SET_TYPE_FILTER, filter: 'DEFAULT' }]);
  });
});