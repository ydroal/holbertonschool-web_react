import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultNotification: {
    color: 'blue',
    textAlign: 'left'
  },
  urgentNotification: {
    color: 'red',
    textAlign: 'left'
  }
});

const NotificationItem = React.memo(({ id, type, html, value, markAsRead }) => {
  const handleMarkAsRead = () => {
    markAsRead(id);
  };
  
  const notificationStyle = type === 'urgent' ? styles.urgentNotification : styles.defaultNotification;

  if (html) {
    return (
      <li className={css(notificationStyle)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleMarkAsRead}></li>
    );
  } else {
    return (
      <li className={css(notificationStyle)} data-notification-type={type} onClick={handleMarkAsRead}>
        {value}
      </li>
    );
  }
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.exact({ __html: PropTypes.string }),
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: -1
};

export default NotificationItem;
