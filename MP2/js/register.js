$(document).ready(function () {
  $("#regis_form").submit(function (y) {
    if (localStorage.getItem("form_costumer_email") != null) {
      let form_costumer_email = localStorage.getItem("form_costumer_email");
      $("#costumer_email").val(form_costumer_email);
    }
    if (localStorage.getItem("form_costumer_password") != null) {
      let form_costumer_password = localStorage.getItem(
        "form_costumer_password"
      );
      $("#costumer_password").val(form_costumer_password);
    }

    $("#first_name").blur(function () {
      let firstName = $("#first_name").val();
      localStorage.setItem("form_first_name", firstName);
    });
    $("#last_name").blur(function () {
      let lastName = $("#last_name").val();
      localStorage.setItem("form_last_name", lastName);
    });
    $("#costumer_email").blur(function () {
      let costumerEmail = $("#costumer_email").val();
      localStorage.setItem("form_costumer_email", costumerEmail);
    });
    $("#costumer_password").blur(function () {
      let costumerPassword = $("#costumer_password").val();
      localStorage.setItem("form_costumer_password", costumerPassword);
    });
    $("#confirm_password").blur(function () {
      let confirmPassword = $("#confirm_password").val();
      localStorage.setItem("form_confirm_password", confirmPassword);
    });

    if (costumerPassword == confirmPassword) {
      $("#same_pass").text("password matched!");
    } else {
      $("#same_pass").text("password doesn't match!");
    }

    y.preventDefault();
  });
});
