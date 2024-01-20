import React from 'react';

function NotificationItem(props) {
    if (props.html) {
      // dangerouslySetInnerHTMLを使用
      return <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>;
    } else {
      // 通常のテキストをレンダリング
      return <li data-notification-type={props.type}>{props.value}</li>;
    }
  }

export default NotificationItem;