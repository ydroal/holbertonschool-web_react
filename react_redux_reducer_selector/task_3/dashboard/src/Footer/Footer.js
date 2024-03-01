import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  AppFooter: {
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: '1rem',
    borderTop: '3px solid #df354b'
  },
  contactUs: {
    marginTop: '15px',
    textAlign: 'center'
  }
});

function Footer() {
  const { user } = useContext(AppContext); // コンテキストからユーザー情報を取得

  return (
    <footer className={css(styles.AppFooter)}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user.isLoggedIn && (
        <p className={css(styles.contactUs)}>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;