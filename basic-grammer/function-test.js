

var func1 = function(Obj) {
	// Obj.name = 'Tom';
	Obj = {
		name: 'Chuck'
	}
}

var func2 = function(value) {
	value = 20;
}

var test = function ()
{
	var obj1 = {
		name: 'lee'
 	}

  var obj2 = obj1;
	console.log ('obj1.name: ' + obj1.name);
	console.log ('obj2.name: ' + obj2.name);
	func1(obj1);
	console.log ('obj1.name: ' + obj1.name);
	console.log ('obj2.name: ' + obj2.name);

	var num1 = 10;
	var num2 = num1;
  console.log ('num1: ' + num1);
	console.log ('num2: ' + num2);
	func2(num1);
  console.log ('num1: ' + num1);
	console.log ('num2: ' + num2);
}

test();