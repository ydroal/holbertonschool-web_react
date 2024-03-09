import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext'; 

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#df354b',
  },
  holbertonLogo: {
    width: '200px',
    height: 'auto',
  },
});

class Header extends Component {
  static contextType = AppContext; // ContextTypeを使ってAppContextを関連付け

  render() {
    const { user, logOut } = this.context; // this.contextを通じてuserオブジェクトとlogOut関数にアクセス
    return (
      <>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.holbertonLogo)} alt="Holberton Logo" />
          <h1>School dashboard</h1>
        </header>
          {user.isLoggedIn && ( // isLoggedInがtrueの場合にログアウトセクションを表示
            <div id="logoutSection" className={css(styles.logoutSection)}>
              Welcome <strong>{user.email}</strong> (<a href="#" onClick={logOut}>logout</a>)
            </div>
          )}
      </>
    );
  }
}

export default Header;
