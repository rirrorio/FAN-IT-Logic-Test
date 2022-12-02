function socks(array) {
  let pairs = 0;
  let sorted = array.sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      pairs++;
      i += 1;
    }
  }
    //   console.log(pairs)
  return pairs;
}

const input1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const input2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const input3 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log(socks(input1)); // 3
console.log(socks(input2)); // 6
console.log(socks(input3)); // 4
