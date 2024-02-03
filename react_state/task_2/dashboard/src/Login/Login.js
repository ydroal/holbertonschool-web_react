import React, { Component } from 'react';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    };
  }

  handleLoginSubmit = (e) => {
    // イベントのデフォルトの動作（ページの再読み込みやサーバーへのデータ送信）をキャンセル
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value }, this.handleEnableSubmit);
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value }, this.handleEnableSubmit);
  }

  handleEnableSubmit = () => {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.formGroup)}>
            <label className={css(styles.label)} htmlFor="email">Email:</label>
            <input className={css(styles.input)} type="email" id="email" name="email" value={email} onChange={this.handleChangeEmail}/>
          </div>
          <div className={css(styles.formGroup)}>
            <label className={css(styles.label)} htmlFor="password">Password:</label>
            <input className={css(styles.input)} type="password" id="password" name="password" value={password} onChange={this.handleChangePassword}/>
          </div>
          <input type="submit" value="OK" className={css(styles.button)} disabled={!enableSubmit}></input>
        </form>
      </div>
    );
  }
}

export default Login;