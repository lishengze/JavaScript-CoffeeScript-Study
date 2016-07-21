// function Obj(value) {
//   this.value = value;
//   this.next = null;
// }
//
// Obj.prototype[Symbol.iterator]=function(){
//   var iterator ={
//     next: next
//   };
//   var current = this;         // 指向当前的Obj.
//   function next(){
//     if (current) {
//       var value = current.value;
//       current = current.next;
//       return{
//         done:false,
//         value: value
//       };
//     } else {
//       return
//         {done:true};
//     }
//   }
//   return iterator;
// }
//
// var one = new Obj(1);
// console.log(one);
// var two = new Obj(2);
// var three = new Obj(3);
//
// one.next = two;
// two.next = three;
// for (var i of one) {
//   console.log(i);
// }
//
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}

// let obj = {
//   data: [ 'hello', 'world' ],
//   [Symbol.iterator]() {
//     const self = this;
//     let index = 0;
//     return {
//       next() {
//         if (index < self.data.length) {
//           return {
//             value: self.data[index++],
//             done: false
//           };
//         } else {
//           return { value: undefined, done: true };
//         }
//       }
//     };
//   }
// };

/*
set 在for ...of 中返回键值
map 在for ...of 中返回键名和键值
*/
var engines =new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for(var e of engines){
  console.log(e);
}
// Gecko
// Trident
// Webkit
var es6 =new Map();
es6.set("edition",6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for(var[name, value] of es6){
  console.log(name + ": " + value);
}
// edition: 6
// committee: TC39
// standard: ECMA-262
