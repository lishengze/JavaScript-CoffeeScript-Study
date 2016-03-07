/*
6.1  对象相关。

*/
// var person = {};
//
// Object.defineProperties(person, "name", {
//     writable: false,
//     value : "Derreck"
// });
//
// console.log(person.name);

/*
原型模式
*/
// 实例与函数访问的不同方式。
// function person_b() {
//
// }
//
// person_b.prototype.sayHello = function () {
//   console.log("Hello person_b");
// }
//
// person_b.prototype.name = "Tom";
//
// var person_b1 = new person_b();
//
// person_b1.sayHello();
// person_b.prototype.sayHello();
//
// console.log("person_b.prototype.name: " + person_b.prototype.name);
// console.log("person_b.name: " + person_b.name);
// console.log(person_b1.constructor === person_b.prototype.constructor);

// 实例与原型间松散的连接，
// 用字面对象给原型赋值，会改变原型默认的属性断裂其与实例的连接。

function person_c() {

}

person_c.prototype.sayHello = function () {
  console.log("Hello person_c!");
}

var ins_person_c1 = new person_c();
ins_person_c1.sayHello();

person_c.prototype = {
  sayHi : function() {
    console.log("Hi person_c!");
  }
}

ins_person_c1.sayHi(); // error,  .sayHi is undefined!
ins_person_c1.sayHello();
