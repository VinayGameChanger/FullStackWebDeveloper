//switch statement

//calendar using if else 
let day=55;
if(day==0){console.log("Sunday");}
else if(day==1){console.log("Monday");}
else if(day==2){console.log("Tuesday");}
else if(day==3){console.log("Wednesday");}
else if(day==4){console.log("Thurday");}
else if(day==5){console.log("Friday");}
else if(day==6){console.log("Saturday");}
else{console.log("Invalid Day");}

//calendar using switch statement
switch(day){
    case 0:console.log("Sunday");break;
    case 1:console.log("monday");break;
    case 2:console.log("Tuesday");break;
    case 3:console.log("Wednesday");break;
    case 4:console.log("Thurday");break;
    case 5:console.log("Friday");break;
    case 6:console.log("Saturday");break;
    default:console.log("Invalid day");
}