function sum(num1, num2 = 7) {
    return num1 + num2;
  }

  let num1 = +prompt("enter the first number");

  let result = sum(num1);
  console.log(result);