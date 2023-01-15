//optional chaining in objects

const user={
    name:"vinay",
    age:27,
    // address:{HNo:75}
}
console.log(user?.name);
console.log(user?.address);
console.log(user?.address?.HNo);

// it ?. give undefined not error
