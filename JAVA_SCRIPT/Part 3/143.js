//fetch
const URL="https://jsonplaceholder.typicode.com/posts";
const whatIsThis=fetch(URL);
console.log(whatIsThis);//return promise

whatIsThis.then((value)=>{
    if(value.ok){
        console.log(value);
        return value.json()
    }else{
        throw new Error("error hai")
    }

}).then((data)=>{
    console.log(data);
})
//fetch only give error in network related error