/*
6.1  对象相关。 

*/ 
var person = {};

Object.defineProperties(person, "name", {
    writable: false,
    value : "Derreck"
});

console.log(person.name);