import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({displayDrawer}) {
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
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
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
};

Notifications.defaultProps = {
  displayDrawer: false,
}

export default Notifications;