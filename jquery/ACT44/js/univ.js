$(document).ready(function () {
  let student_count = Number($("#student-count").text());
  $("#studentButton").click(function () {
    student_count++;
    $("#student-count").text(student_count);
  });

  $(".subject-item").click(function () {
    $(this).toggleClass("subject-selected");
  });
});
