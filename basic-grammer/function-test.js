

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

// test2();

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

var myObject = {
	foo: "bar",
	func: function() {
	var self = this;
	console.log("outer func: this.foo = " + this.foo);
	console.log("outer func: self.foo = " + self.foo);
	(function() {
		console.log("inner func: this.foo = " + this.foo);
		console.log("inner func: self.foo = " + self.foo);
	}()
	);
	}
};
// myObject.func();

// (function() {
//  console.log(1); 
//  setTimeout(function(){console.log(2)}, 1000); 
//  setTimeout(function(){console.log(3)}, 0); 
//  console.log(4);
// })();

function sum() {
	var val1 = arguments[0]
	if (arguments.length > 1) {
		return arguments[0] + arguments[1];
	} else {
		return function() {
			return sum(val1,arguments[0]);
		};
	}
}

function testSum() {
	console.log (sum(2,3));
	console.log (sum(2)(3));
}


function testArray() {
	var arr1 = "john".split(''); 
	var arr2 = arr1.reverse(); 
	var arr3 = "jones".split(''); 
	console.log(arr1)
	console.log(arr2)
	console.log(arr3)
	arr2.push(arr3);
	console.log(arr2)
	console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
	console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
}

function testOperator () {
	console.log(1 + "2" + "2");
	console.log(1 + +"2" + "2");
	console.log(1 + -"1" + "2");
	console.log(+"1" + "1" + "2");
	console.log( "A" - "B" + "2");
	console.log( "A" - "B" + 2);
} 

function testLogicOperator() {
	console.log("0 || 1 = "+(0 || 1));
	console.log("1 || 2 = "+(1 || 2));
	console.log("0 && 1 = "+(0 && 1));
	console.log("1 && 2 = "+(1 && 2));	
}

function main() {
	// testOperator();
	testLogicOperator();
}

main();