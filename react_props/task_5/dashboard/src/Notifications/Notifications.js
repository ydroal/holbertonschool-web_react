import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
// import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({displayDrawer, listNotifications}) {
  const notificationStyle = displayDrawer ? "notificationVisible" : "notificationHidden";

  function handleClick() {
    console.log('Close button has been clicked');
  }

  return (
    <div className='notification-container'>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
      <div className={`Notifications ${notificationStyle}`}>
         {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
        <ul>
          {listNotifications.length === 0 ? (
            <NotificationItem value="No new notification for now" />
            ) : (
              listNotifications.map(notification => (
                <NotificationItem 
                  key={notification.id}
                  html={notification.html}
                  type={notification.type}
                  value={notification.value}
                />
              ))
          )}
        </ul>
        <button aria-label="Close" onClick={handleClick}>
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;