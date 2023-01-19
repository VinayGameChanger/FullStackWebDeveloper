//get multiple elements using getElements by class name

const allNavItems=document.getElementsByClassName("nav-item");//HTMl collection
console.log(allNavItems);
console.log(allNavItems[0]);
console.log(allNavItems[1]);
console.log(typeof allNavItems);
console.log(Array.isArray(allNavItems));

//get multiple elements using querySelectorAll 

const navItems=document.querySelectorAll(".nav-item");//node list
console.log(navItems);
console.log(navItems[1]);
console.log(typeof navItems);
console.log(Array.isArray(navItems));
