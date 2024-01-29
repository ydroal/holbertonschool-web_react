import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppBody: {
    minHeight: '30vh',
    margin: '2rem',
    textAlign: 'left'
  },
  input: {
    border: '1px solid #e8e8e8',
    margin: '0.8rem',
  },
  button: {
    backgroundColor: '#ffffff',
    border: '1px solid #e8e8e8',
    borderRadius: '3px'
  }
});

function Login() {
  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <label>Email: 
        <input type="email" className={css(styles.input)}></input>
      </label>
      <label>Password: 
        <input type="password" className={css(styles.input)}></input>
      </label>
      
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;