function outputMessage(des, data) {
    console.log (des);
    console.log (data);
}

function add (a, b) {
    console.log ('a: '+ a);
    console.log ('b: '+ b);
    console.log ('a+b: ' + (a+b));
}

Function.prototype.bind1 = function (scope) {
    var self = this;
    return function() {
        return self.apply(scope, arguments);
    }
}

Function.prototype.bind2 = function (scope) {
    var self = this;
    var outterArgs = Array.prototype.slice.call(arguments, 1);
    console.log ('outter arguments: ');
    console.log (arguments);
    return function() {
        console.log ('inner arguments: ');
        console.log (arguments);
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = outterArgs.concat(innerArgs);
        return self.apply(scope, finalArgs);
    }
}

Function.prototype.bind3 = function (scope) {
    if (typeof this !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var F = function() {}
    var outterArgs = Array.prototype.slice.call(arguments,1);
    var bound = function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = outterArgs.concat(innerArgs);
        var thisObj = this instanceof F ? this : scope; // 若是函数本身调用则传入外部this, 若是创建的对象调用则传入自己的指针;
        return self.apply(thisObj, finalArgs);
    }

    F.prototype = self.prototype;
    bound.prototype = new F();
    return bound;
}

function testBind1(a,b,c,d) {
    var addbind1a = add.bind1(this);
    addbind1a(a,b);
    var addbind1b = add.bind1(this, a, b);
    addbind1b();   
}

function testBind2(a,b,c,d) {
    var addbind2a = add.bind2(this);
    var addbind2b = add.bind2(this, a, b);
    console.log ('addbind2a(a,b): ');
    addbind2a(a,b);
    console.log ('addbind2b(): ');
    addbind2b();
    console.log ('addbind2b(c,d): ')
    addbind2b(c,d);
}

function testBind3 (a,b,c,d) {
    var addbind3a = add.bind3(this);
    var addbind3b = add.bind3(this, a, b);
    console.log ('addbind3a(a,b): ');
    addbind3a(a,b);
    console.log ('addbind3b(): ');
    addbind3b();
    console.log ('addbind3b(c,d): ')
    addbind3b(c,d);

    var addbind3c = add.bind3(this, a, b);
    var addbind3obj = new addbind3c();
    outputMessage('addbind3obj type: ', typeof addbind3obj);
}

function testAdd() {
    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;
    testBind3(a,b,c,d);
}
function main() {
    testAdd();
}

main();