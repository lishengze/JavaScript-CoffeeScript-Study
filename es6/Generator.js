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
var grammerPoint = "\nnext 的参数是上一个yield语句的值";
console.log(grammerPoint);

function* testNext(x) {
  console.log('TestNext!');
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

//3. 与for of 的联合使用
grammerPoint = "\n与for...of联合使用生成斐波那契数列！";
console.log(grammerPoint);

function* fibonacci() {
  let [prev, cur] = [0,1];
  for (;;) {
    [prev, cur] = [cur, cur + prev];
    yield cur
  }
}

for (let n of fibonacci()) {
  if (n > 10) break;
  console.log(n);
}

//4.用Generator封装对象使其可以被for...of访问
grammerPoint = "\n4.用Generator封装对象使其可以被for...of访问"

function* objectEntries() {
  var propkeys = Object.keys(this);

  for (let propKey of propkeys) {
    yield[propKey, this[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };
jane[Symbol.iterator] = objectEntries;
for(let [key,value] of jane) {
  console.log(key + ': ' + value)
}

//5. Generator.prototype.throw, Generator.prototype.return
// Generator 外部的throw 即可以被内部的catch捕捉到也可以被外部的catch捕捉到。
// Generator 内部的throw 意味着Generator的结束，再调用next返回的会是{value:undefined, done:true};
// Generator 外部调用return , 除非内部有try...finally模块，其余都意味着结束Generator函数。

grammerPoint = "\n5. Generator.prototype.throw"
console.log(grammerPoint);

function* testThrow() {
  yield console.log ('Hello ')
  try{
    yield;
  }catch(e) {
    console.log('内部捕获: ' + e);
  }
  yield console.log ("World!");
}

testThrowObj = testThrow();
testThrowObj.next();
testThrowObj.next();
try{
  testThrowObj.throw('a');
  testThrowObj.throw('b');
} catch(e) {
  console.log ('外部捕获: '+e);
}
testThrowObj.next();

// 6. yield*语法, 声明Generator对象，即yield* 后的对象会被转换成Generator 对象。
grammerPoint = '\n6.yield*语法, 声明Generator对象，即yield* 后的对象会被转换成Generator 对象';
console.log(grammerPoint);

let delegatedIterator = function*() {
  yield 'Hello'
  yield 'delegatedIterator'
};

let delegatingIterator = function*(){
  yield 'Greetings';
  yield* delegatedIterator()
  yield 'OK, bye.';
};

for(let value of delegatingIterator()) {
  console.log (value);
}

function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; ++i) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];
for (let x of iterTree(tree)) {
  console.log (x);
}

// 9. Generator 与 状态机。
var clock = function* () {
  while (true) {
    console.log ('Tick!');
    yield;
    console.log ('Tock!');
    yield;
  }
}

var Clock = clock();
// for (var i = 0; i<10; ++i) {
//   Clock.next();
// }

//10. Generator可以暂停函数的执行， 返回任意表达式的值。使其有多种应用。
// 测试yield , 观察是否是yield 后的语句执行后才会响应next
grammerPoint = '\n10.1测试yield , 观察是否是yield 后的语句执行后才会响应next';
console.log(grammerPoint);

function step1(time1) {
  var time2 = time1 * 2;
  var IsCallback = true;

  if (true === IsCallback) {
    setTimeout(function(){
      console.log ('step1, time1: ' + time1);
      return time2;
    }, time1);
  } else {
    console.log ('step1, ' + time1);
    return time2;
  }
}

function step2(time2) {
  setTimeout(function(){
    console.log('step2, ' + time2);
  }, time2)
}

function* testYield(initialTime) {
  console.log('TestYield Begun!');
  var step1value = yield step1(initialTime);
  var step2value = yield step2(step1value);
}

var initialTime = 1000;
var testYieldObj = testYield(initialTime);
var value1 = testYieldObj.next();
console.log('value1 : ' + value1.value);
testYieldObj.next(value1.value);
