function runActivity() {
  const iterable = "Hello";
  const char_array = Array.from(iterable);

  console.log("Array from iterable:", char_array);

  const keys_array = Array.from(char_array.keys());

  console.log("Indices of array elements:", keys_array);
}
