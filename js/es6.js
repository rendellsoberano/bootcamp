function runActivity() {
  //   function getSum(x, y) {
  //     return x + y;
  //   }
  //   console.log(getSum(5, 6));
  //   const getSum = function (x, y) {
  //     return x + y;
  //   };
  //   console.log(getSum(5, 6));
  //   const getSum = (x, y) => {
  //     return x + y;
  //   };
  //   console.log(getSum(5, 6));
  //   function getProduct(x = 0, y = 0) {
  //     return x * y;
  //   }
  //   console.log(getProduct(5, 5));
  //   function getSum(...args) {
  //     let sum = 0;
  //     for (let i = 0; i < args.length; i++) {
  //       sum += args[i];
  //     }
  //     return sum;
  //   }
  //   console.log(getSum(2, 5, 23, 67, 9, 3.2, 8));
  //   console.log("rendell soberano".startsWith("ren"));
  //   console.log("rendell soberano".endsWith("rano"));
  //   console.log("RenDelL SoBerAno".toLowerCase().startsWith("ren"));
  //   let x = confirm("Do you like Harry Potter?");
  //   if (x) {
  //     alert("Hey! A fellow wizard.");
  //   } else {
  //     alert("Muggle.");
  //   }
  //   let x = "aeiou";
  //   let y = Array.from(x);
  //   console.log(y);
  const x = [4, 9, 16, 25, 100];
  //   let y = x.find(checkNumbers);
  let y = x.filter(checkNumbers);

  function checkNumbers(val) {
    return val > 15;
  }
  console.log(y[y.length - 1]);
}
