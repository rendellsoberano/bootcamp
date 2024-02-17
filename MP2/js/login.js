$(document).ready(function () {
  if (localStorage.getItem("check_input") != null) {
    if (localStorage.getItem("check_input") == 1) {
      window.location.href = "home.html";
    }
  }

  $("#form_content").submit(function (x) {
    let emailAdd = $("#email_input").val();
    let passWord = $("#password_input").val();
    let check_input = $("#check_input").prop("checked");
    if (emailAdd == form_costumer_email) {
      if (passWord == form_costumer_password) {
        if (check_input) {
          localStorage.setItem("check_input", 1);
        }
        localStorage.setItem("loggedIn", 1);
        window.location.href = "home.html";
      } else {
        $("#pass_checker").text("incorrect password");
      }
    } else {
      $("#email_checker").text("incorrect email");
    }
    x.preventDefault();
  });

  if (localStorage.getItem("form_costumer_email") != null) {
    const form_costumer_email = localStorage.getItem("form_costumer_email");
    $("#costumer_email").val(form_costumer_email);
  }
  if (localStorage.getItem("form_costumer_password") != null) {
    const form_costumer_password = localStorage.getItem(
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
});
