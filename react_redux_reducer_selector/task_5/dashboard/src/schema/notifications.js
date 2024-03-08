import { normalize, schema } from 'normalizr';
import notificationsData from '../../dist/notifications.json';

// エンティティの定義
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// notifications.jsonからのデータを正規化する関数
// 配列形式のデータを正規化するためには、new schema.Array(notification)をnormalize関数として使用
const notificationsNormalizer = (data) => {
  const notificationSchema = new schema.Array(notification);
  return normalize(data, notificationSchema);
};

// userIDに基づいてフィルタリングし、contextを返す関数
const getAllNotificationsByUser = (userId) => {
  const { entities } = notificationsNormalizer(notificationsData.default);
  const { notifications, messages } = entities;

  return Object.values(notifications).reduce((result, notification) => {
    if (notification.author === userId) {
      result.push(messages[notification.context]);
    }
    return result;
  }, []);
};

export { getAllNotificationsByUser, notificationsNormalizer };