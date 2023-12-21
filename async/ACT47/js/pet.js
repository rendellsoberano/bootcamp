$(document).ready(function () {
  let hunger = 100;
  let exercise = 100;
  let sleep = 100;

  $("#eat_icon").click(function () {
    hunger = 100;
    if (sleep >= 5) {
      sleep -= 5;
    } else {
      sleep = 0;
    }
    $("#last_activity").text("Fed Candy!");
  });

  $("#exercise_icon").click(function () {
    exercise = 100;
    if (sleep >= 10) {
      sleep -= 10;
    } else {
      sleep = 0;
    }
    $("#last_activity").text("Played with Candy!");
  });

  $("#sleep_icon").click(function () {
    sleep = 100;
    $("#last_activity").text("Candy took a nap!");
  });

  function update_bars() {
    $("#hunger_bar").css("width", hunger + "%");
    $("#exercise_bar").css("width", exercise + "%");
    $("#sleep_bar").css("width", sleep + "%");
  }

  function passive_hunger() {
    if (hunger <= 0) {
      hunger = 0;
    } else {
      hunger--;
    }
  }

  function passive_exercise() {
    if (exercise <= 0) {
      exercise = 0;
    } else {
      exercise--;
    }
  }

  function passive_sleep() {
    if (sleep <= 0) {
      sleep = 0;
    } else {
      sleep--;
    }
  }

  setInterval(update_bars, 50);
  setInterval(passive_hunger, 500);
  setInterval(passive_exercise, 1000);
  setInterval(passive_sleep, 2000);
});
