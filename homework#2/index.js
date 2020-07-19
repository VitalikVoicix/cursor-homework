
let userInteger1 = Number(prompt("Enter your first number: "));
while(userInteger1 !== parseInt(userInteger1)){

userInteger1 = Number(prompt("Your number is wrong.Enter your first number: "));
}

let userInteger2 = Number(prompt("Enter your second number: "));
 while(userInteger2 !== parseInt(userInteger2)){

userInteger2 = Number(prompt("Your number is wrong.Enter your second number: "))
}

let passEvenNumbers = confirm("Do we need to skip even numbers?")
if (passEvenNumbers == false){
let sum = 0;
for(let i = userInteger1;i<=userInteger2;i++){
    sum+=i;
}  

alert(sum);
}else{
let sum = 0;
if(passEvenNumbers == true){
    for(let i = userInteger1;i<=userInteger2;i++){
        if(i%2 !== 0){
            sum+= i;
        }     
  } 
}
alert(sum);
}
