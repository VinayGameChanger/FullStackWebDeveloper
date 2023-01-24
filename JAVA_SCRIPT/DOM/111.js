const rootNode=document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);
const htmlElementNode=rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.dir(htmlElementNode);

// console.log("Child of html");
// console.log(htmlElementNode.childNodes);

const headElementNode=htmlElementNode.childNodes[0];
// console.log(headElementNode);

const textNode1=htmlElementNode.childNodes[1];
// console.log(textNode1);

const bodyElementNode=htmlElementNode.childNodes[2];
// console.log(bodyElementNode);
// console.log("Parent");
// console.log(headElementNode.parentNode);


// console.log("sibling relation");
// console.log(headElementNode.nextSibling.nextSibling);

// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextElementSibling);

// console.log(headElementNode.childNodes);

//task go to heading directly and change color of their parent

//this is called dom traversing
const myHeading=document.querySelector("h1");
const div=myHeading.parentNode;
div.style.backgroundColor="Blue";
div.style.color="white";

//to directly select body
const body=document.body;
console.log(body);

//we can directly apply query selector to any node
const head =document.querySelector("head");
console.log(head);
const title=head.querySelector("title")
console.log(title);
console.log(title.childNodes);

//if we dont want new;inw space node then we can use children property
const container=document.querySelector(".container")
console.log(container.childNodes);//with text node
console.log(container.children);//without text node