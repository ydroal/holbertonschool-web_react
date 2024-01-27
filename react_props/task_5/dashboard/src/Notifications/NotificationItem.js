import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
    if (props.html) {
      // dangerouslySetInnerHTMLを使用
      return <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>;
    } else {
      // 通常のテキストをレンダリング
      return <li data-notification-type={props.type}>{props.value}</li>;
    }
  }

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.exact({ __html: PropTypes.string })
};

NotificationItem.defaultProps = {
  type: 'default',
}

export default NotificationItem;