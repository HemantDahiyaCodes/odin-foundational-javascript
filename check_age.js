function Age(age){
    let my_age = +prompt("Enter your age : \n");

    if (my_age>=18){
        return console.log("You are allowed");
    }

    else{
        return console.log("Did your parents allowed you?");
    }
}

Age();