

var func1 = function(Obj) {
	// Obj.name = 'Tom';
	Obj = {
		name: 'Chuck'
	}
}

var func2 = function(value) {
	value = 20;
}

var test1 = function ()
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

// test1();

var test2 = function() {
	var Obj = [];
	// Obj['name'] = [];
	// Obj['age'] = [];
	// Obj['name']['one'] = 'lee';
	// Obj['name']['two'] = 'Tom';
	// Obj['age']['one'] = '20';
	// Obj['age']['two'] = '21';

	for (val1 in Obj) {
			console.log ('val1: ' + val1);
		for (val2 in Obj[val1]) {
			console.log ('val2: ' + Obj[val1][val2]);
		}
	}
}

test2();

var test3 = function() {
	var Obj = {};
	Obj.name = {};
	Obj.age= {};
	Obj.name.one = 'lee';
	Obj.name.two = 'Tom';
	Obj.age.one = '20';
	Obj.age.two = '21';

	for (val1 in Obj) {
			console.log ('val1: ' + val1);
		for (val2 in Obj.val1) {
			console.log ('val2: ' + Obj.val1.val2);
		}
	}
}

// test3();