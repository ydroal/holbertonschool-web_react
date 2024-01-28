import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  constructor(props) {
    // 親クラス（この場合は React.Component）のコンストラクタを呼び出す。
    // this.props がコンポーネント内で使用できるようになる
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead() {
    this.props.markAsRead(this.props.id);
  }

  render() {
    const { type, html, value } = this.props;

    if (html) {
      return (
         // dangerouslySetInnerHTMLを使用
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={this.markAsRead}></li>
      );
    } else {
      return (
        // 通常のテキストをレンダリング
        <li data-notification-type={type} onClick={this.markAsRead}>
          {value}
        </li>
      );
    }
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.exact({ __html: PropTypes.string }),
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: -1
}

export default NotificationItem;