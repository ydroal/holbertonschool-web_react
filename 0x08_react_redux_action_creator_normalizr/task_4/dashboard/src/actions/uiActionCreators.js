import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

const logout = () => {
  return { type: LOGOUT };
};

const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
};

const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
};

export { login, logout, displayNotificationDrawer, hideNotificationDrawer };