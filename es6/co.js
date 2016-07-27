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
