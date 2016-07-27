// function creatFuncs (){
//     var result = new Array();
//     for (var i = 0; i < 10; ++i){
//         result[i] = (function(num) {
//             return function(){
//                 return num;
//             }
//         }(i));
//     }
//     return result;
// }
//
// var result = creatFuncs();
// for (var i = 0; i < result.length; ++i) {
//     console.log(result[i]());
// }
//
// var color = "blue";
//
// function getColor() {
//     return color;
// }
//
// console.log(getColor());
//
// color = "red";

// 构造函数模式，创建实例时 新实例的活动对象作用域。
var name = "window!";
var person1 = function () {
    this.name = "tom!";
    this.sayHello = function () {
        console.log(this.name);
    }
}

var person2 = function () {
    this.name = "tom!";
    this.sayHello = SayHello;
}

var SayHello =  function () {
    console.log(this.name);
}

var ins_person_1 = new person1();
ins_person_1.sayHello();

var ins_person_2 = new person2();
ins_person_2.sayHello(); // 还是构造函数作用域;
