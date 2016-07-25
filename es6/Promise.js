/*
用于解决异步编程的Promise.
*/
let ProgrammerPoint = "1. Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供，不用自己部署。\n"
                    + "2. then方法指定resolved 与 rejected 状态的回调函数！";
console.log(ProgrammerPoint);

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     console.log ('Timeout!');
//     setTimeout(resolve, ms, ms + 'ms done!');
//   });
// }
//
// timeout(3000).then((value) => {
//   console.log(value);
// });

// 3. 若一个promise A resolve的对象是另一个promise B 那么这个对象的最终状态 是resolve 还是 reject 由B决定!
ProgrammerPoint = "3. 若一个promise A resolve的对象是另一个promise B 那么这个对象的最终状态 是resolve 还是 reject 由B决定!"
console.log(ProgrammerPoint);

// var p1 = new Promise(function(resolve, reject){
//   console.log('P1!');
//   setTimeout(() => reject(new Error('Failed in p1!')), 3000);
// })
//
// var p2 = new Promise(function(resolve, reject){
//   console.log ('P2!');
//   setTimeout(() => resolve(p1), 2000)
// })
//
// p2.then(result => console.log(result))
//   .catch(error => console.log(error))

var p3 = new Promise(function(resolve, reject){
  console.log('p3!');
  resolve('To then1');
})

p3.then((value)=>{
  console.log(value);
  return 'To then2'
}).then((value)=>{
  console.log(value);
  return 'To then3'
}).then((value)=>{
  console.log(value);
  return 'To then4'
})
