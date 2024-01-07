import $ from 'jquery';

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

$('button').on('click', updateCounter); 