import { Map, List } from 'immutable';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
  filter: 'DEFAULT',
  entities: Map(),
  result: List()
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const addData = action.data.map(notification => ({
        ...notification,
        isRead: false
      }));
      const normalizedData = notificationsNormalizer(addData);
      return state.mergeDeep({
        entities: normalizedData.entities,
        result: normalizedData.result
      });

    case MARK_AS_READ:
      return state.setIn(['entities', 'notifications', String(action.index), 'isRead'], true);
      
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};
