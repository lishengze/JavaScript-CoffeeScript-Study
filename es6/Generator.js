/*
Generator, yield, next 基础用法
1. yield 后的表达式在调用对应的next后才会求值。
*/
// 1. 与 Iterator 的关系
var tmpIterator = {}
tmpIterator[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
  return 4;
  yield 5;
}

for (var value of tmpIterator) {
  console.log (value);
}

//2. next 的参数意义;
var grammerPoint = "next 的参数是上一个yield语句的值";
console.log(grammerPoint);

function* testNext(x) {
  var y = 2 *(yield (x + 1));
  var z = yield(y/3);
  return (x+y+z)
}

var testNexta = testNext(5);
console.log("testNexta.next(): " + testNexta.next().value)
console.log("testNexta.next(): " + testNexta.next().value)
console.log("testNexta.next(): " + testNexta.next().value)

var testNextb = testNext(5);
console.log("testNextb(): " + testNextb.next().value)
console.log("testNextb(12): " + testNextb.next(12).value)
console.log("testNextb(13): " + testNextb.next(13).value)
