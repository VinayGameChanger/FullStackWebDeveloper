const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest()
xhr.open("GET",URL)
xhr.onload=()=>{
    //error handling
    if(xhr.status>=200 && xhr.status<300){
        const data=JSON.parse(xhr.response);
        console.log(data);
    }else{console.log("error");}
}
//for network related error
xhr.onerror=()=>console.log("network error");
xhr.send();
