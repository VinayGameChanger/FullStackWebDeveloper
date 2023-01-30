// XHR==xmlHTTPRequest
const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();//object
// console.log(xhr);
//step1
// console.log(xhr.readyState);//before open
xhr.open("GET",URL);
// console.log(xhr.readyState);//after open
// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState==4){
//         console.log(xhr);
//         console.log(xhr.readyState);//if ready state ==4 then we get our response
//         // console.log(typeof xhr.response);//string 
//         const response=xhr.response;
//         const data=JSON.parse(response);//convert string to JSON
//         console.log(typeof data);
//     }
// }

//method 2 
//onload will only start when ready state is 4
xhr.onload=function(){
    console.log(xhr.readyState);
        const response=xhr.response;
        const data=JSON.parse(response);//convert string to JSON
        console.log(data);    
}
xhr.send();