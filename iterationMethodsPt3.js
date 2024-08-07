const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

//part 1 ..task 1
let trans = transactions.filter((trans) => {
  if (trans[0] == "income") {
    return true;
  }
});
console.log(trans);

////part 1 ..task 2

let trans1 = transactions.filter((trans1) => {
  if (trans1[0] == "expense") {
    return true;
  }
});
console.log(trans1);

//part 2 task 1
let sum = 0;
let trans3 = transactions.filter((trans3) => {
  if (trans3[0] == "income") {
    sum = sum + trans3[1];
  }
});
console.log(sum);

// part 2 task 2
let sum1 = 0;
let trans4 = transactions.filter((trans4) => {
  if (trans4[0] == "expense") {
    sum1 = sum1 + trans4[1];
  }
});
console.log(sum1);

// part 3  task 5
let sum3 = 0;
transactions.forEach((item) => {
  if (item[0] == "income") {
    sum3 = sum3 + item[1];
  } else {
    sum3 = sum3 - item[1];
  }
});
console.log(sum3);
console.log(sum - sum1);

let trans5 = transactions.filter((trans5) => {
  if (trans5[1] > 500) {
    return true;
  }
});
console.log(trans5);
