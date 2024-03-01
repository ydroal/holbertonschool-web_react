// import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsread = (index) => {
  return { type: MARK_AS_READ, index };
};

export const setNotificationFilter = (filter) => {
  return { type: SET_TYPE_FILTER, filter };
};

export const dispatchMarkAsRead = (index) => {
  return (dispatch) => {
    dispatch(markAsread(index));
  };
};

export const dispatchSetNotificationFilter = (filter) => {
  return (dispatch) => {
    dispatch(setNotificationFilter(filter));
  };
};

// const dispatch = store.dispatch;

// アクションクリエーターをバインド
// const boundNotificationActionCreators = bindActionCreators({
//   markAsread,
//   setNotificationFilter
// }, dispatch);

// バインドされたアクションクリエーターをエクスポートする
// export default boundNotificationActionCreators;