const rootNode=document.getRootNode();
console.log(rootNode);

console.log(rootNode.childNodes);
const htmlElementNode=rootNode.childNodes[0];
console.log(htmlElementNode);
console.dir(htmlElementNode);

console.log("Child of html");
console.log(htmlElementNode.childNodes);

const headElementNode=htmlElementNode.childNodes[0];
console.log(headElementNode);

const textNode1=htmlElementNode.childNodes[1];
console.log(textNode1);

const bodyElementNode=htmlElementNode.childNodes[2];
console.log(bodyElementNode);