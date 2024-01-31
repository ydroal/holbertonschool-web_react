import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

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

function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.holbertonLogo)} alt="Holberton Logo" /> 
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;
