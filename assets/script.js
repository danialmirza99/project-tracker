
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

// Create a Bootstrap card component explaining the instructions of how 
// to use the app and a button to open a 
// [Bootstrap modal dialog](https://getbootstrap.com/docs/4.5/components/modal/).
// TODO

