//fill method
const myArray=["hello","dog","cat","milk"];

function isLength3(String){
    return String.length===3;
}

console.log(myArray.find(isLength3));


//realistic example

const users=[
    {userId:01,userName:"vinay"},
    {userId:02,userName:"ajay"},
    {userId:03,userName:"sunny"},
    {userId:04,userName:"raj"},
    {userId:05,userName:"rajiv"},
]

//to find user with user id 3

//method1
console.log(users.find(({userId})=>{return userId==03;}));
//method2 
console.log(users.find((user)=>user.userId===04));