function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];
  const fruit_stocks = [];

  function addItem() {
    let fruit_name = prompt("What is the name of the fruit?");
    let fruit_price = Number(prompt("What is the price of the fruit?"));
    let fruit_stock = 0;

    if (fruit_price >= 0) {
      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);
      console.log(
        fruit_name +
          " added as item for sale. Each " +
          fruit_name +
          " sells for " +
          fruit_price +
          ". Stock set to " +
          fruit_stock +
          "."
      );
    } else {
      console.error("ERROR: Invalid price! Enter a positive value.");
    }
  }

  function restock() {
    let choice_name = prompt("What item would you like to add stock to?");
    fruit_found = false;
    for (i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice_name) {
        fruit_found = true;
        let fruit_stock = Number(
          prompt(
            "How many of" + choice_name + "would you like to add to stock?"
          )
        );
        fruit_stocks.push(fruit_stock);
        console.log(
          fruit_stock +
            " stock has been added to " +
            choice +
            ". New stock: " +
            fruit_stocks[i]
        );
      }
    }
  }

  function checkPrice() {
    let choice_name = prompt("What would you like to check the price of?");
    let fruit_found = false;
    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice_name) {
        fruit_found = true;
        let fruit_count = Number(
          prompt(
            "How many of " +
              choice_name +
              " would you like to check the price of?"
          )
        );
        if (fruit_count >= 0) {
          let total = fruit_count * fruit_prices[i];
          console.log(
            fruit_count + " of " + choice_name + " is worth " + total
          );
        } else {
          console.error("ERROR: Can not have negative amount.");
        }
      }
    }
  }

  function sell() {
    let choice_name = prompt("What would you like to sell?");
    let fruit_found = false;

    for (let i = 0; i < fruit_names.length; i++) {
      if (fruit_names[i] == choice_name) {
        fruit_found = true;
        let amount = Number(
          prompt("How many " + choice_name + " would you like buy?")
        );
        if (amount >= 0) {
          let total = amount * fruit_prices[i];
          console.log(
            amount +
              " of " +
              choice_name +
              " sold for " +
              fruit_prices[i] +
              ". New stock: " +
              fruit_stocks[i]
          );
          //you have to make it so that you don't sell if not enough stock
          //you also have to make it so that stocks are deducted when you buy fruit
          //you also have to display how much the fruit was sold for as well as remaining stock
          //you have to do validation
        } else {
          console.error("ERROR: Can not have negative amount.");
        }
      }
    }

    if (fruit_found == false) {
      console.error("ERROR: Fruit was not found.");
    }
  }

  alert("Rendell's Fruit Store");
  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt("(1) Add new items (2) Restock (3) Check price (4) Sell (5) Stop")
    );
    switch (choice) {
      case 1:
        addItem();
        break;
      case 2:
        restock();
        break;
      case 3:
        checkPrice();
        break;
      case 4:
        sell();
        break;
      case 5:
        i = 1;
      default:
        console.error("ERROR: Enter one of the choices.");
    }
  }
}
