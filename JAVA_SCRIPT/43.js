//nested destructuring

const users=[
    {userId:1,firstName:"Vinay",gender:"male"},
    {userId:2,firstName:"ajay",gender:"male"},
    {userId:3,firstName:"sunny",gender:"male"}
]

const[user1,{firstName:user2name,userId:user2id},{gender}]=users;
console.log(user1);
console.log(user2name);
console.log(gender);
console.log(user2id);