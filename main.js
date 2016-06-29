var currentDate = new Date();
var dayNumber = currentDate.getDate();
var calendarEl = document.querySelector('#calendar');
var month = currentDate.getMonth();
var daysInMonth = 0;
var dayArr = [];
var $monthEl = $('#month-name');
var $leftArrow = $('#left');
var $rightArrow = $('#right');
var allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

$(document).ready(getDaysOfMonth);

$leftArrow.on('click', function () {
  dayArr = [];
  $('li').remove();
  month -= 1;
  console.log(month);
  $monthEl.text(allMonths[month]);
  getDaysOfMonth();
});

$rightArrow.on('click', function () {
  dayArr = [];
  $('li').remove();
  month += 1;
  console.log(month);
  $monthEl.text(allMonths[month]);
  getDaysOfMonth();
});

$monthEl.on('click', getDaysOfMonth);


function getDaysOfMonth () {
  if (month % 2 === 0) {
    daysInMonth = 31;
  }
  else if (month === 1) {
    daysInMonth = 28;
  }
  else {
    daysInMonth = 30;
  }
  for (i = 1; i <= daysInMonth; i++) {
    var $li = $('<li></li>');
    $('ul').append($li);
    $li.text(i);
    dayArr.push(i);
    if (i === dayNumber && month === currentDate.getMonth()) {
      $li.addClass('today');
    }
  }
}
