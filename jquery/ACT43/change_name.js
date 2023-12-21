function changeName() {
  let name_text = prompt("What is your name?");

  document.getElementById("userName").innerHTML = name_text;
  document.getElementById("userName2").innerHTML = name_text;
}
