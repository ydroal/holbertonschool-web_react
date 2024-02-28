import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

const markAsread = (index) => {
  return { type: MARK_AS_READ, index };
};

const setNotificationFilter = (filter) => {
  return { type: SET_TYPE_FILTER, filter };
};

// アクションクリエーターをバインド
const boundNotificationActionCreators = bindActionCreators({
  markAsread,
  setNotificationFilter
}, dispatch);

// バインドされたアクションクリエーターをエクスポートする
export default boundNotificationActionCreators;