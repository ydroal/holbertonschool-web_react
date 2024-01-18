function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex) return 'Holberton School';
  return 'Holberton School main dashboard';
}

function getLatestNotification() {
  return '<span style="color: red;"><strong>Urgent requirement</strong> - complete by EOD</span>';
}

export { getFullYear, getFooterCopy, getLatestNotification };