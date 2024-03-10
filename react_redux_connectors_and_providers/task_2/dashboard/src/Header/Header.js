import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { logout } from '../actions/uiActionCreators';

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

// uiReducerからuser プロパティを取得
export const mapStateToProps = (state) => ({
  user: state.get('user')
});

// コンポーネントのpropsにアクションクリーエーターをマッピング
// このオブジェクトのキーはコンポーネントのprops名になり、値はアクションクリエーターの関数になる
export const mapDispatchToProps = {
  logout
  };

class Header extends Component {

  render() {
    const { user, logout } = this.props;
    return (
      <>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.holbertonLogo)} alt="Holberton Logo" />
          <h1>School dashboard</h1>
        </header>
          {user.isLoggedIn && ( // isLoggedInがtrueの場合にログアウトセクションを表示
            <div id="logoutSection" className={css(styles.logoutSection)}>
              Welcome <strong>{user.email}</strong> (<a href="#" onClick={logout}>logout</a>)
            </div>
          )}
      </>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({ // userがオブジェクトであり、その構造を定義
    isLoggedIn: PropTypes.bool.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired  
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
// デフォルトエクスポートで接続されたコンポーネントをエクスポート
export default ConnectedHeader;
