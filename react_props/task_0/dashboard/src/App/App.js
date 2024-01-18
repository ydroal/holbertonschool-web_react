import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications'
import './App.css';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
