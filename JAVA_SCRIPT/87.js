//practise of classes

//class animal
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){ return `${this.name} is Eating`}
}

//class dog
// class Dog{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){ return `${this.name} is Eating`}
// }

//Dog class is similiar to animal class so we can make dog class using animal class

//dog is subclass and parent class is animal
class Dog extends Animal{

}
const tommy= new Dog("tommy",7,45);
console.log(tommy);
console.log(tommy.eat());

//object/instance