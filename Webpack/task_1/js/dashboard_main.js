const $ = require('jquery');
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">0 clicks on the button</p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(count + ' clicks on the button');
}

// Lodashのdebounce関数を使用してupdateCounter関数をラップする
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

// ボタンのクリックイベントにdebouncedUpdateCounter関数をバインドする
$('button').on('click', debouncedUpdateCounter);
