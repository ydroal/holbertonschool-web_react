import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList'
import './App.css';

function App({isLoggedIn}) {
  return (
    <>
      <div className="App">
        <div className="Header">
          <Header />
          <Notifications />
        </div>
        {isLoggedIn ? <CourseList /> : <Login />}
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
