import * as notificationsData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  // const notificationsList = notificationsData.default ? Object.values(notificationsData.default) : [];
  return notificationsData.default
    .filter((notification) => notification.author && notification.author.id === userId)
    .map((notification) => notification.context);
};

export default getAllNotificationsByUser;