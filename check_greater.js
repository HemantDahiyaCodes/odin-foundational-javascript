function minimum(num1, num2){
    if (num1>num2) {
        console.log(`${num1} is greater than ${num2}`);
    }

    else{
        console.log(`${num2} is greater than ${num1}`);
    }
}

let num_1 = +prompt("Enter the value of first number:");
let num_2 = +prompt("Enter the valueo f second number");

minimum(num_1, num_2);