import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export const styles = StyleSheet.create({
  notificationHidden: {
    display: 'none',
  },
  notificationVisible: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
    padding: '0.8rem',
    border: '1px dashed #df354b',
    marginRight: '1rem',
    marginBottom: '0.8rem',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999,
      backgroundColor: 'white',
      width: '100%',
      height: '100vh',
      border: 'none',
      padding: 0, 
      fontSize: '20px',
    },
  },
  sectionTitle: {
    marginBottom: '0.3rem',
    '@media (max-width: 900px)': {
      position: 'absolute',
      top: '0',
      right: '1rem'
    },
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '1rem',
    marginBottom: '0.2rem',
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'transparent',
    border: 'none'
  },
  buttonImg: {
    width: '20px',
    height: '20px',
  },
  notificationList: {
    marginTop: '0.5rem',
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
});

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
    const notificationStyle = displayDrawer ? styles.notificationVisible : styles.notificationHidden;

    return (
      <div className='notification-container'>
        <div className={css(styles.menuItem)}>
          <p className={css(styles.sectionTitle)}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(notificationStyle)}>
            {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
            <ul className={css(styles.notificationList)}>
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
            <button aria-label="Close" onClick={this.handleClick.bind(this)} className={css(styles.button)}>
              <img src={closeIcon} alt="Close" className={css(styles.buttonImg)}/>
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