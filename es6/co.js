//co
var fs = require('fs');

var grammerPoint= "1. 手动实现CO,就是利用then方法层层添加回调函数";
console.log(grammerPoint);

function readFileTest(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function(err, data) {
      if (err) reject(err);
      resolve(data);
    })
  })
}

function* GeneratorFunc() {
  var r1 = yield readFileTest('./Test1.txt');
  console.log(r1.toString());
  var r2 = yield readFileTest('./Test2.txt');
  console.log(r2.toString());
}

var genTest = GeneratorFunc();
genTest.next().value.then(function(data){
  genTest.next(data).value.then(function(data){
    genTest.next(data);
  })
})

function run(gen) {
  var genInner = gen();

  function next(data) {
    var result = genInner.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    })
  }

  next();
}

run(GeneratorFunc);

function co(gen) {
  var ctx = this;

  return new Promise(function(resolve, reject) {
    if (typeof gen === 'function') genAuto = gen.call(ctx);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();
    function onFulfilled() {
      var result;
      try {
          result = genAuto.next();
      } catch (error){
          reject(error);
      }
      next(result);
    }

    function next(result) {
      if (result.done) return resolve(result.value);
      var value = toPromise.call(ctx, result.value);
      if (value && isPromise(value)) return next(onFulfilled,onRejected);
      return function onRejected() {
        new TypeError('You may only yield a function, promise, generator, array, or object, '
                    + 'but the following object was passed: "' + String(ret.value) + '"');
      }
    }
  });
}
