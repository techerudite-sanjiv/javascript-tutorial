function myfun(num) {
  let temp = num;
  let totalSum = 0,
    rem;

  while (num > 0) {
    rem = num % 10;
    console.log(rem);
    totalSum = totalSum + rem * rem * rem;
    num = num / 10;
  }
  if ((temp = totalSum)) {
    console.log("number is armstrong", totalSum);
  } else {
    console.log("number is not armstrong");
  }
}
myfun(153);
