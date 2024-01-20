import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications() {
  function handleClick() {
    console.log('Close button has been clicked');
  }

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
      <button
        style={{ width: '40px', height: '40px', position: 'absolute', right: 0, top: 0 }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>
    </div>
  );
}

export default Notifications;