// import { bindActionCreators } from 'redux';
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const logout = () => {
  return { type: LOGOUT };
};

export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
};

export const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
};

// Thunkアクションクリエーター
export const dispatchLogin = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
  };
};

export const dispatchLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

export const dispatchDisplayNotificationDrawer = () => {
  return (dispatch) => {
    dispatch(displayNotificationDrawer());
  };
};

export const dispatchHideNotificationDrawer = () => {
  return (dispatch) => {
    dispatch(hideNotificationDrawer());
  };
};

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('../../dist/login-success.json', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
    }
    const data = await response.json();
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

// const dispatch = store.dispatch;

// アクションクリエーターをバインド
// const boundUiActionCreators = bindActionCreators({
//   login,
//   logout,
//   displayNotificationDrawer,
//   hideNotificationDrawer
// }, dispatch);
