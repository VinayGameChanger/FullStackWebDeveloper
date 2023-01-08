//destructing in object
const band={
    name:"Black Pink",
    famousSong:"kill this love",
    famousMember:"Lisa",
    anotherSong:"Ready for Love"
}
//old method
// const bandName=band.name;
// const song=band.famousSong;
// console.log(bandName);
// console.log(song);

//using object destructuring

const {name:bandName,famousSong:song,...restProps}=band;
console.log(bandName);
console.log(song);
console.log(restProps);