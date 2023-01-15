// function hello(){
//     console.log("hello world");
// }
// hello(); //1st way of call
// hello.call();//2nd way of call

const user1={
    name:"vinay",
    age:27,
    about:function(hobby,favMusician){
        console.log(this.name,this.age,hobby,favMusician);
    }
}
const user2={
    name:"sunny",
    age:7,
}
user1.about();
user1.about.call(user1);
user1.about.call(user2); //using call we can pass this value or who will call function
user1.about.call(user1,"manga","lisa")//using call we call also pass arguments value
user1.about.call(user2,"anime","jisoo")

//apply 
//in apply we can pass arguments value in a array
user1.about.apply(user2,["anime","jisoo"])

//bind 
//it work like call but return a function
const func=user1.about.bind(user1,"anime","jisoo");
func();
