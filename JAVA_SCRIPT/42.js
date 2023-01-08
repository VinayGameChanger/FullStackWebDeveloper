//objects inside array
//very useful in real life application
const users=[
    {userId:1,firstName:"Vinay",gender:"male"},
    {userId:2,firstName:"ajay",gender:"male"},
    {userId:3,firstName:"sunny",gender:"male"}
]
console.log(users);

// for of loop
for(let user of users){
    console.log(user.firstName);
}
//for loop
for(let i=0;i<users.length;i++){
    console.log(users[i]);
}