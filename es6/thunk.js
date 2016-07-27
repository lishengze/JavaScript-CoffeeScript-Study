// 帮助Generator实现异步操作的流程化。
/*
1. 传名调用的扩展
*/

// var thunk = function(fileName) {
//   return function(callback) {
//     return fs.readFile(fileName, callback);
//   };
// };
// var readFileThunk = thunk(fileName);
// readFileThunk(callback);
//
// var thunkEs5 = function(fn) {
//   return function() {
//     var args = Array.prototype.slice.call(arguments);
//     return function(callback) {
//       args.push(callback);
//       return fn.apply(this, args);
//     }
//   }
// }
// var thunkEs5ReadFile = thunkEs5(fs.readFile);
// thunkEs5ReadFile(fileName)(callback);

// Thunkify: 回调函数只能执行一次。
var grammerPoint = "2.回调函数只执行一次的Thunkify 扩展！"
console.log (grammerPoint);

function thunkifyTest(fn) {
  console.log (fn);
  return function() {
    var args = new Array(arguments.length);
    var ctx = this;

    for (let i = 0; i < arguments.length; ++i) {
      args[i] = arguments[i];
    }

    console.log ('args: ');
    console.log (args);
    return function(done) {
      console.log('done: ');
      console.log (done);

      var called; // 确保回调函数只运行一次。
      args.push(function() {
        if (called) return;
        called = true;
        done.apply(null, arguments);
      })

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }

  }
}

function f1(a, b, callback){
  var sum = a + b;
  callback(sum);
  callback(sum);
  callback(sum);
}
var f2 = thunkifyTest(f1);
var print = console.log.bind(console);
var f3 = f2(1,2);
f3(print);

grammerPoint = "\n3.Thunkify用于Generator的自动执行.";
console.log(grammerPoint);

var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

var gen = function* (){
  var r1 = yield readFile('./Test1.txt');
  console.log(r1.toString());
  var r2 = yield readFile('./Test2.txt');
  console.log(r2.toString());
};

// var g = gen();
// var r1 = g.next();
// r1.value(function(err, data) {
//   if (err) throw err;
//   var r2 = g.next(data);
//   r2.value(function(err, data){
//     if (err) throw err;
//     g.next(data);
//   })
// })

function run(GeneratorFunc) {
  var geninner = GeneratorFunc();

  function next(err,data) {
    var result = geninner.next(data);
    if (result.done) return;
    result.value(next);
  }
  next();
}

run(gen);
