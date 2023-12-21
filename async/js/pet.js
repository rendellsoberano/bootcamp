$(document).ready(function () {
  $("#do_eat_pic").click(do_eat());
  $("#do_excersice_pic").click(do_exercise());
  $("#do_sleep_pic").click(do_sleep());

  let hunger = 100;
  let exercise = 100;
  let sleep = 100;

  function do_eat() {
    hunger += 20;
    sleep -= 5;
    if (hunger >= 100) {
      hunger = 100;
    }
    let hunger_width = hunger + "%";
    let sleep_width = sleep + "%";
    let hunger_text = "Fed a Saiyan Burger!";
    $("#hunger_bar").css("width", hunger_width);
    $("sleep_bar").css("width", sleep_width);
    $("#last_activity").text(hunger_text);
  }
  function do_exercise() {
    exercise += 20;
    sleep -= 10;
    if (exercise >= 100) {
      hunger = 100;
    }
    let exercise_width = hunger + "%";
    let sleep_width = sleep + "%";
    let exercise_text = "Saiyan training!";
    $("#hunger_bar").css("width", exercise_width);
    $("sleep_bar").css("width", sleep_width);
    $("#last_activity").text(exercise_text);
  }
  function do_sleep() {
    sleep += 20;
    if (sleep >= 100) {
      sleep = 100;
    }
    let sleep_width = sleep + "%";
    let sleep_text = "Sleeping like a normal Human!";
    $("#hunger_bar").css("width", exercise_width);
    $("sleep_bar").css("width", sleep_width);
    $("#last_activity").text(sleep_text);
  }

  setInterval(minusHunger, 500);
  setInterval(minusExercise, 1000);
  setInterval(minusSleep, 2000);

  function minusHunger() {
    hunger--;
    let hunger_width = hunger + "%";
    $("#hunger_bar").css("width", hunger_width);
  }
  function minusExercise() {
    exercise--;
    let exercise_width = exercise + "%";
    $("#exercise_bar").css("width", exercise_width);
  }
  function minusSleep() {
    sleep--;
    let sleep_width = sleep + "%";
    $("#sleep_bar").css("width", sleep_width);
  }
});
