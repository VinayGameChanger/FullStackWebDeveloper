// function createUser(firstName,lastName,email,age,address){
//     const user={}
//         user.firstName=firstName;
//         user.lastName=lastName;
//         user.email=email;
//         user.age=age;
//         user.address=address;
//         user.about=function(){return `${this.firstName} is ${this.age} years old`};
//         user.is18=function(){return this.age>=18;};
//         return user;
// }
// const user1=createUser("vinay","sharma","vinay@gmail.com",27,"HNo",)
// console.log(user1);

// const user2=createUser("sunny","riyar","sunny@gmail.com",27,"HNo-75",)
// console.log(user2);

//problem2 -every time a user a created two method is also created then this cause memory wastage

const userMethod={
    about: function(){return `${this.firstName} is ${this.age} years old`},
    is18: function(){return this.age>=18;}
}
function createUser(firstName,lastName,email,age,address){
    const user={}
        user.firstName=firstName;
        user.lastName=lastName;
        user.email=email;
        user.age=age;
        user.address=address;
        user.about=userMethod.about;
        user.is18=userMethod.is18;
        return user;
}
const user1=createUser("vinay","sharma","vinay@gmail.com",27,"HNo",)
console.log(user1.about());

const user2=createUser("sunny","riyar","sunny@gmail.com",27,"HNo-75",)
console.log(user2);
console.log(user2.about());
