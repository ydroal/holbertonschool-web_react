import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils';
import './App.css';

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
   
function App({isLoggedIn}) {
  return (
    <>
      <div className="App">
        <div className="Header">
          <Header />
          <Notifications listNotifications={listNotifications} />
        </div>
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
