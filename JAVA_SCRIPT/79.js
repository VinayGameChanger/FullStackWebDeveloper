// const userMethod={
//     about: function(){return `${this.firstName} is ${this.age} years old`},
//     is18: function(){return this.age>=18;},
//     sing:function(){"ready for love"}
// }
// function createUser(firstName,lastName,email,age,address){
//     const user={}
//         user.firstName=firstName;
//         user.lastName=lastName;
//         user.email=email;
//         user.age=age;
//         user.address=address;
//         user.about=userMethod.about;
//         user.is18=userMethod.is18;
//         user.sing=userMethod.sing;
//         return user;
// }

//problem3 if we want to add more methods we have to write same methods reference in createuser function which is troublesome work

const userMethod={
    about: function(){return `${this.firstName} is ${this.age} years old`},
    is18: function(){return this.age>=18;},
    sing:function(){"ready for love"}
}
function createUser(firstName,lastName,email,age,address){
    const user=Object.create(userMethod);
        user.firstName=firstName;
        user.lastName=lastName;
        user.email=email;
        user.age=age;
        user.address=address;
        return user;
}
const user1=createUser("vinay","sharma","vinay@gmail.com",27,"HNo",)
console.log(user1.about());

const user2=createUser("sunny","riyar","sunny@gmail.com",27,"HNo-75",)
console.log(user2);
console.log(user2.about());