import { markAsread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('Notification Action Creators', () => {
  it('markAsread should create MARK_AS_READ action', () => {
    expect(markAsread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  })

  it('setNotificationFilter should create SET_TYPE_FILTER action', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    expect(setNotificationFilter(filter)).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
  });
});