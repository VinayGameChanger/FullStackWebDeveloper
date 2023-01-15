//class animal
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){ return `${this.name} is Eating`}
}

// class dog
//super =parent class
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age)
        this.speed=speed;
    }
    eat(){ return `Modified Eat:${this.name} is Eating`}
    
    run(){
        console.log(this.speed,"very fast");
    }

}

const tommy= new Dog("tommy",7,45);
console.log(tommy);
tommy.run();
console.log(tommy.eat());