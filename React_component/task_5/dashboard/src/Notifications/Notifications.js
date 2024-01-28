import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleClick() {
    console.log('Close button has been clicked');
  }
  
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const notificationStyle = displayDrawer ? "notificationVisible" : "notificationHidden";

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
                      id={notification.id}
                      html={notification.html}
                      type={notification.type}
                      value={notification.value}
                      markAsRead={this.markAsRead.bind(this, notification.id)}
                      // thisはNotificationsクラスのインスタンスを指す
                    />
                  ))
              )}
            </ul>
            <button aria-label="Close" onClick={this.handleClick.bind(this)}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
        )}
      </div>
    );
  }
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