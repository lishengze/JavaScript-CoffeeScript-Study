var a;
var b = null;

console.log (typeof(a));

console.log (typeof(b));

if (!b && typeof(b) !== "undefined" && b != 0) {
	console.log ('b is null!');
}

console.log (Object.prototype.toString.call(NaN));
console.log (Object.prototype.toString.call("NaN"));
console.log (Object.prototype.toString.call([1,2]));
console.log (Object.prototype.toString.call({'a': 'b'}));

