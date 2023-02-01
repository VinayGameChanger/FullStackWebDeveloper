const URL="https://jsonplaceholder.typicode.com/posts";

function sendRequest(method,URL){
    return new Promise((resolve,reject)=>{
const xhr=new XMLHttpRequest();
xhr.open(method,URL)
xhr.onload=function(){
    if(xhr.status>=200 &&xhr.status<=300){
        resolve(xhr.response)
    }else{
        reject(new Error("something went wrong"))
    }
}
xhr.onerror=function(){
    console.log("network disconnected");
}
xhr.send();
    })
}
sendRequest("GET",URL).then((response)=>{
const data=JSON.parse(response)
console.log(data);
return data;//yha return karne se jo promise mil raha tha uske saath data resolve ho gya hai oterwise undefined
}).then((data)=>{
    const id=data[5].id;
    console.log(id);
    return id;
}).then((id)=>{
const url=URL+`/${id}`
console.log(url);
return sendRequest("GET",url)
}).then((newResponse)=>{
    const newData=JSON.parse(newResponse);
    console.log(newData);
}).catch(error=>console.log(error))