/*
## async 是Generator Promise的语法糖。

*/
async function testFunc1() {
  return 'Hello World';
}
testFunc1().then(v => (console.log(v)));
