function runActivity() {
  let shape = Number(
    prompt(
      "Select a shape you would like to get the area of? 1: Triangle, 2: Circle, 3: Rectangle."
    )
  );

  if (shape == 1) {
    let base = Number(prompt("Give me the measurement of the base."));
    let height = Number(prompt("Give me the measurement of the height."));
    let triangle_area = 0.5 * base * height;

    console.log("The area of the triangle is " + triangle_area + ".");
  } else if (shape == 2) {
    let radius = Number(prompt("Give me the measurement of the radius."));
    let circle_area = 3.1416 * radius ** 2;

    console.log("The area of circle is " + circle_area + ".");
  } else if (shape == 3) {
    let length = Number(prompt("Give me the measurement of the length."));
    let width = Number(prompt("Give me the measurement of the width."));
    let rectangle_area = length * width;

    console.log("The area of the rectangle is " + rectangle_area + ".");
  } else {
    console.error("ERROR! Invalid Input!. Choose from 1, 2 or 3.");
  }
}
