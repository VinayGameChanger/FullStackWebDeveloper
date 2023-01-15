// const user={
//     firstName:"vinay",
//     lastName:"sharma",
//     email:"vinay@gmail.com",
//     age:27,
//     address:"HNo,Colony,pincode,state",
//     about(){return `${this.firstName} is ${this.age} years old`},
//     is18(){return this.age>=18;}
// }
// const ans=user.about();
// console.log(ans);


//problem1
//suppose we want to make lakh   or crore of users than it is very tedious work how to solve???

//function:
//(1) this function take input as first name last name email 
//(2) create a object and add key value pair
//(3) return an object

function createUser(firstName,lastName,email,age,address){
    const user={}
        user.firstName=firstName;
        user.lastName=lastName;
        user.email=email;
        user.age=age;
        user.address=address;
        user.about=function(){return `${this.firstName} is ${this.age} years old`};
        user.is18=function(){return this.age>=18;};
        return user;
}

const user1=createUser("vinay","sharma","vinay@gmail.com",27,"HNo",)
console.log(user1);
const ans=user1.about();
console.log(ans);
