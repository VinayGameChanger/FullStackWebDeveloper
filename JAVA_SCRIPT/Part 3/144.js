const URL="https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
// .then((value)=>{
//     console.log(value);
//     return value.json()
// })
// .then((data)=>{
//     console.log(data);
// })

//async return function
//awaits for promise to resolve
console.log("script start");
async function getPosts(){
    const response=await fetch(URL);
    if(!response.ok){
        throw new Error("error hai kuch")
    }
    const data=await response.json();
    console.log(response);
    return data;
}

getPosts()
.then((data)=>{console.log(data);})
.catch(error=>console.log(error))

console.log("script end");
