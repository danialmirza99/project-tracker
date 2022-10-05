
// Create a header/hero area that welcomes users to the application and 
// displays the current time and date using Moment.js with `setInterval()`.
// DONE

var timeDate = moment().format("dddd, MMMM Do YYYY h:mm:ss a");
$("#time-date").text(timeDate);

let updateTime = function () {
    let currentTime = moment().format('dddd, MMMM Do YYYY h:mm:ss a')
    $("#time-date").text(currentTime);
}

updateTime();
setInterval(updateTime, 1000);

// Autocomplete widget
$(function () {
    var projectOptions = [
      'Mow Lawn',
      'Fix Sink',
      'Cut Tree Branches',
      'Water Flowers',
    ];
    $('#project-type').autocomplete({
      source: projectOptions,
    });
  });

// Datepicker widget
// https://api.jqueryui.com/datepicker/#option-changeMonth
$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });