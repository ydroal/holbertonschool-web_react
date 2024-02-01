import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils'

const styles = StyleSheet.create({
  AppFooter: {
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: '1rem',
    borderTop: '3px solid #df354b'
  },
});

function Footer() {
  return (
    <footer className={css(styles.AppFooter)}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  );
}

export default Footer;