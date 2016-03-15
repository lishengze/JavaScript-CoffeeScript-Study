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

function testLiteralObject () {
  function person_c() {}
  
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
}

/*
测试: 函数内部用this指针给函数对象创建属性与在函数外部创建属性对函数的影响
结果: 
*/
function teseInnerThisAndOutterFunc() {
  
  function test1() {
    this.life = 'pain!';
  }
  
  function test2() {}
  test2.life = 'fight!'
  
  console.log ('test1:');
  console.log (test1);
  
  console.log ('\ntest2:');
  console.log (test2);  
  
    var EventEmitter = require('events').EventEmitter;

    var path = require('path');

    function ClientMain1() {}

    ClientMain1.emitter = new EventEmitter;

    ClientMain1.childFilePath = path.join(__dirname, 'client-child-complete-b.js');


    console.log('\nClientMain1:');
    console.log(ClientMain1);  
    
    var ClientMain1Object = new ClientMain1();
    console.log('\nClientMain1Object:');
    console.log(ClientMain1Object);
    
    function ClientMain2() {
   
      this.emitter = new EventEmitter;
  
      this.childFilePath = path.join(__dirname, 'client-child-complete-b.js');         
    }

    console.log('\nClientMain2:');
    console.log(ClientMain2); 
    
    var ClientMain2Object = new ClientMain2();
    console.log('\nClientMain2Object:');
    console.log(ClientMain2Object);
    
    // console.log('\nthis: ');
    // console.log(this.childFilePath);
     
}

(function(){
 
 teseInnerThisAndOutterFunc();
  
})();

