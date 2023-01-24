const grandparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")

//event bubbling

// no capture
// child.addEventListener("click",(e)=>{
//     console.log("bubbling start on child");
// })
// parent.addEventListener("click",(e)=>{
//     console.log("bubbling start on parent");
// })
// grandparent.addEventListener("click",(e)=>{
//     console.log("bubbling start on grandparent");
// })
// document.body.addEventListener("click",(e)=>{
//     console.log("bubbling start on body");
// })

//capturing event by giving third argument true
// child.addEventListener("click",(e)=>{
//     console.log("capturing start on child");
// },true)
// parent.addEventListener("click",(e)=>{
//     console.log("capturing start on parent");
// },true)
// grandparent.addEventListener("click",(e)=>{
//     console.log("capturing start on grandparent");
// },true)
// document.body.addEventListener("click",(e)=>{
//     console.log("capturing start on body");
// },true)

//event delegation
// grandparent.addEventListener("click",(e)=>{
//     console.log(e.target);
// })
document.body.addEventListener("click",(e)=>{
    console.log(e.target);
})