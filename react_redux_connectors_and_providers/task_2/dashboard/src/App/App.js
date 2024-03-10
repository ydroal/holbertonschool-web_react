import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import AppContext from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import { loginRequest, logout } from '../actions/uiActionCreators';

// Appコンポーネントのスタイルを定義
const styles = StyleSheet.create({
  // app: {
  //   textAlign: 'center',
  // },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '3px solid #df354b'
  },
  body: {
    minHeight: '30vh',
    margin: '2rem',
    textAlign: 'left',
  },
  footer: {
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: '1rem',
    borderTop: '3px solid #df354b'
  }
});

const listCourses = [
  {
    id: 1,
    name: 'ES6', 
    credit: 60
  },
  {
    id: 2,
    name: 'Webpack', 
    credit: 20
  },
  {
    id: 3,
    name: 'React', 
    credit: 40
  },
];

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available'
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available'
  },
  {
    id: 3,
    type: 'urgent',
    html: {__html: getLatestNotification()}
  }
];

// uiReducerからisLoggedIn プロパティを取得
export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

// コンポーネントのpropsにアクションクリーエーターをマッピング
// このオブジェクトの各キーはコンポーネントのprops名になり、値はアクションクリエーターの関数になる
export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout
  };

// 通常のエクスポートでコンポーネントをエクスポート（テスト用など）
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listNotifications: listNotifications
    };
  }

  componentDidMount() {
    // コンポーネントがマウントされた直後に props をログに出力
    // console.log(this.props);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logout();
    }
  }

  markNotificationAsRead = (id) => {
    try {
      this.setState(prevState => ({
        listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
      }), () => {
        console.log(this.state.listNotifications); // 新しいステートをログに記録
      });
    } catch (error) {
      console.error('Error updating the state:', error);
    }
  }

  render() {
    const { user } = this.state;
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login } = this.props;
    return (
      <AppContext.Provider value={{ user }}>
      <>
        <div className={css(styles.header)}>
          <Header />
          <Notifications 
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          listNotifications={this.state.listNotifications} 
          markNotificationAsRead={this.markNotificationAsRead}/>
        </div>
        <div className={css(styles.body)}>
          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={login}/>
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>latest News1</p>
            <p>latest News2</p>
            <p>latest News3</p>
          </BodySection>
        </div>
        <Footer className={css(styles.footer)} />
      </>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool, 
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

// connect 関数を使用して AppコンポーネントをReduxストアに接続
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
// デフォルトエクスポートで接続されたコンポーネントをエクスポート
export default ConnectedApp;
