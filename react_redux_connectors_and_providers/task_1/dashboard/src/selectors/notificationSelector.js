import { Map } from 'immutable';

// ステートがImmutable.jsオブジェクトであることを想定
// 引数としてnotificationsサブステートを受け取ることを想定。
export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => {
  const notificationsObj = state.get('entities').get('notifications');
  let notificationsMap = Map();
  Object.entries(notificationsObj).forEach(([key, notification]) => {
    notificationsMap = notificationsMap.set(key, Map(notification));
  });
  return notificationsMap;
};

export const getUnreadNotifications = state => {
  const notifications = getNotifications(state); // これはMapオブジェクトを返す
  // Mapオブジェクトに直接.filter()を適用し、未読の通知だけをフィルタリング
  const unreadNotifications = notifications.filter(notification => !notification.get('isRead'));
  return unreadNotifications;
};



