$(document).ready(function () {
  $("#form_bmi").submit(function (x) {
    x.preventDefault();

    let height = Number($("#height_bmi").val());
    let weight = Number($("#weight_bmi").val());

    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    if (bmi < 16) {
      $("#bmi_status").text("Severe Thinness.");
      $("#bmi_status").css("color", "red");
      $("#bmi_result").css("color", "red");
    } else if (bmi >= 16 && bmi < 17) {
      $("#bmi_status").text("Moderate Thinness.");
      $("#bmi_status").css("color", "orange");
      $("#bmi_result").css("color", "orange");
    } else if (bmi >= 17 && bmi < 18.5) {
      $("#bmi_status").text("Mild Thinnes.");
      $("#bmi_status").css("color", "yellow");
      $("#bmi_result").css("color", "yellow");
    } else if (bmi >= 18.5 && bmi < 25) {
      $("#bmi_status").text("Normal.");
      $("#bmi_status").css("color", "blue");
      $("#bmi_result").css("color", "blue");
    } else if (bmi >= 25 && bmi < 30) {
      $("#bmi_status").text("Overweight.");
      $("#bmi_status").css("color", "green");
      $("#bmi_result").css("color", "green");
    } else if (bmi >= 30 && bmi <= 35) {
      $("#bmi_status").text("Obese Class-1.");
      $("#bmi_status").css("color", "yellow");
      $("#bmi_result").css("color", "yellow");
    } else if (bmi >= 35 && bmi < 40) {
      $("#bmi_status").text("Obese Class-2.");
      $("#bmi_status").css("color", "orange");
      $("#bmi_result").css("color", "orange");
    } else if (bmi > 40) {
      $("#bmi_status").text("Obese Class-3.");
      $("#bmi_status").css("color", "red");
      $("#bmi_result").css("color", "red");
    }

    $("#bmi_result").text(bmi);
  });
  $("#reset_button").click(function () {
    $("#bmi_status").text("");
    $("#bmi_result").text("");
  });
});
