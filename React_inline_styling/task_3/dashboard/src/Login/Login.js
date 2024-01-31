import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppBody: {
    minHeight: '30vh',
    margin: '2rem',
    textAlign: 'left',

    '@media (max-width: 900px)': {
      maxWidth: '900px',
      margin: '0',
      display: 'flex',
      flexDirection: 'column'
    },
  },
  formGroup: {
    display: 'inline',
    '@media (max-width: 900px)': {
      display: 'flex',
      marginBottom: '0.5rem',
    },
  },
  label: {
    marginRight: '10px',
  },
  input: {
    border: '1px solid #e8e8e8',
    marginRight: '0.8rem',
  },
  button: {
    backgroundColor: '#ffffff',
    border: '1px solid #e8e8e8',
    borderRadius: '3px',
    '@media (max-width: 900px)': {
      width: '40px',
    },
  },
});

function Login() {
  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.formGroup)}>
        <label className={css(styles.label)} htmlFor="email">Email:</label>
        <input className={css(styles.input)} type="email" id="email" name="email" />
      </div>
      <div className={css(styles.formGroup)}>
        <label className={css(styles.label)} htmlFor="password">Password:</label>
        <input className={css(styles.input)} type="password" id="password" name="password" />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;