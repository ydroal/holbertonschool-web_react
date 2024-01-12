import React from 'react'; // JSXをJavaScriptのコードに変換するために使用（React17から不要）
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  function handleClick() {
    console.log('Close button has been clicked');
  }

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
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