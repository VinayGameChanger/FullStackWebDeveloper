const user1={
    name:"vinay",
    age:27,
    about:function(){
        console.log(this);
        console.log(this.name,this.age);
    }
}

//dont do this mistake

const ans1=user1.about;
ans1();//here we are calling through ans() thats why this represent windows

//instead use bind method to get a function
const ans2=user1.about.bind(user1);
ans2();



