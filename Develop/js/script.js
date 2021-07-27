//gets user's discription and save in local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    var currentTime = moment().hours();
    $(".time-block").each(function () {
      var desciptionTime = parseInt($(this).attr("id").split("-")[1]);

      //check description block hour and compare it to current time
      if (desciptionTime < currentTime) {
        $(this).addClass("past");
      } else if (desciptionTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  var interval = setInterval(hourUpdater, 15000);

  //gets saved descriptions from local storage
  $("#time-8 .description").val(localStorage.getItem("time-8"));
  $("#time-9 .description").val(localStorage.getItem("time-9"));
  $("#time-10 .description").val(localStorage.getItem("time-10"));
  $("#time-11 .description").val(localStorage.getItem("time-11"));
  $("#time-12 .description").val(localStorage.getItem("time-12"));
  $("#time-13 .description").val(localStorage.getItem("time-13"));
  $("#time-14 .description").val(localStorage.getItem("time-14"));
  $("#time-15 .description").val(localStorage.getItem("time-15"));
  $("#time-16 .description").val(localStorage.getItem("time-16"));
  $("#time-17 .description").val(localStorage.getItem("time-17"));
  $("#time-18 .description").val(localStorage.getItem("time-18"));
  $("#time-19 .description").val(localStorage.getItem("time-19"));
  $("#time-20 .description").val(localStorage.getItem("time-19"));

  //today's date
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
