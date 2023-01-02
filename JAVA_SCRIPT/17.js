//nested if else

//Guess the Number Game

let winningNo=7;
let guessNo= +prompt("Guess a No");//it take input in string add + to conver to number
if(guessNo===winningNo){
    console.log("Congrats Correct Guess");
}else
{if(guessNo<winningNo){
    console.log("Number too Small");
}else{
    console.log("Number too Big");
}}
