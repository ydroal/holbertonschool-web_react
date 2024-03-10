import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

// uiReducerからuser プロパティを取得
export const mapStateToProps = (state) => ({
  user: state.get('user')
});

export function Footer({ user }) { // propsを関数の引数として受け取る
  // const { user } = useContext(AppContext); // コンテキストからユーザー情報を取得
  // const { user } = this.props; // 関数型はpropsを関数の引数として渡すのでこれは不要

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

Footer.propTypes = {
  user: PropTypes.shape({ // userがオブジェクトであり、その構造を定義
    isLoggedIn: PropTypes.bool.isRequired
  }).isRequired,  
};

// connect 関数を使用して FooterコンポーネントをReduxストアに接続
const ConnectedFooter = connect(mapStateToProps)(Footer);
// デフォルトエクスポートで接続されたコンポーネントをエクスポート
export default ConnectedFooter;