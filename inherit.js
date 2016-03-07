// var class_a = function () {
//   this.name = "class_a";
// }
//
// var class_b = function () {
// }
//
// var ins_class_a1 = new class_a();
// class_b.prototype = ins_class_a1; // 非字面值对象的改变不会改变constructor属性
//
// var ins_class_b1 = new class_b();
//
// console.log("初始值:  " + ins_class_b1.name);
// ins_class_a1.name = "ins_class_a1";
// console.log("原型初始化实例改变: " + ins_class_b1.name);
//
// class_b.prototype.name = "class_b.prototype!";
// console.log("原型改变, ins_class_a1.name: " + ins_class_a1.name)



// 原型组合继承;
function createOjb(obj) {
  function func() {};
  func.prototype = obj;
  new func();
}

function inherit(class_child, class_parent) {
  var proto = createOjb(class_parent.prototype);
  proto.constructor = class_child;
  class_child.prototype = proto;
}

var class_parent_a = function() {
  this.name =  "Tom";
}

class_parent_a.prototype.sayHelloParentA = function () {
  console.log("Hello class_parent_a.prototype!");
}

var class_child_a = function() {
  this.age = 27;
  class_parent_a(this);
}

inherit(class_child_a, class_parent_a);

var ins_class_child_a_1 = new class_child_a();

console.log(ins_class_child_a_1.name);
console.log(ins_class_child_a_1.age);
ins_class_child_a_1.sayHelloParentA();
