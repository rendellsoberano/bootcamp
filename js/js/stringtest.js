function runActivity() {
  let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZLMNOP";
  console.log(x.substring(22, x.length));
  console.log(x.replace("LMNOP", "DAIBEN"));
  console.log(x.replaceAll("LMNOP", "DAIBEN"));
  console.log(x.includes("X"));
  // new set
  // let y = "9876543210";
  // console.log(y.charAt(y.length - 1));
  // console.log(y.indexOf("876"));
  // for (let i = 0; i < y.length; i++) {
  //   console.log(y.charAt(i));
  //   if (y.charAt(i) == 9) {
  //     console.log("this is nine");
  //   }
  // }
  // // new set
  // let z = "CJ,Keith,Rendell,Vance";
  // let z_array = z.split(",");
  // console.log(z_array);
  // console.log(z_array[1]);
}
