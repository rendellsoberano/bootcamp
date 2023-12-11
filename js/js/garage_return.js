function runActivity() {
  class Car {
    constructor(n, m, a) {
      this.name = n;
      this.manufacturer = m;
      this.acceleration = a;
      this.speed = 0;
    }

    start() {
      if (this.speed == 0) {
        this.speed = 30;
        return this.name + " has started! Speed at " + this.speed;
      } else {
        return this.name + " has already started!";
      }
    }

    accelerate() {
      if (this.speed > 0) {
        this.speed += this.acceleration;
        return this.name + " has accelerated! New speed: " + this.speed;
      } else {
        return this.name + " has not started yet.";
      }
    }

    decelerate() {
      if (this.speed > 0) {
        this.speed /= 2;
        if (this.speed < 1) {
          this.speed = 1;
        }
        return this.name + " has decelerated! New speed: " + this.speed;
      } else {
        return this.name + " has not started yet.";
      }
    }

    checkSpeed() {
      return "Current speed: " + this.speed;
    }

    stop() {
      if (this.speed > 0) {
        this.speed = 0;
        return this.name + " has stopped.";
      } else {
        return "The car has already stopped.";
      }
    }
  }

  let name = prompt("Give me the car's name.");
  let manufacturer = prompt("Give me the car's manufacturer.");
  let acceleration = Number(prompt("Give me the car's acceleration."));
  let myCar = new Car(name, manufacturer, acceleration);
  let car2 = new Car(name, manufacturer, acceleration);

  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt(
        "(1) Start (2) Accelerate (3) Decelerate (4) Check Speed (5) Stop (6) End program"
      )
    );
    switch (choice) {
      case 1:
        console.log(myCar.start());
        break;
      case 2:
        console.log(myCar.accelerate());
        break;
      case 3:
        console.log(myCar.decelerate());
        break;
      case 4:
        console.log(myCar.checkSpeed());
        break;
      case 5:
        console.log(myCar.stop());
        break;
      case 6:
        i = 1;
        break;
      default:
        console.log("ERROR: Invalid choice!");
    }
  }
}
