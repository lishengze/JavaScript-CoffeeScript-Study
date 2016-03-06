// Generated by CoffeeScript 1.10.0
(function() {
  var Gadget, ipad, iphone, sum,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  sum = function() {
    var num;
    num = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return num.reduce(x, y)(function() {
      return x + y;
    });
  };

  sum(1, 2, 3);

  Gadget = (function() {
    var _price;

    Gadget.CITY = "beijing";

    Gadget.create = function(name, price) {
      return new Gadget(name, price);
    };

    _price = 0;

    function Gadget(name1, price) {
      this.name = name1;
      this.sell = bind(this.sell, this);
      _price = price;
    }

    Gadget.prototype.sell = function() {
      return "Buy " + this.name + " with " + _price + " in " + Gadget.CITY;
    };

    return Gadget;

  })();

  iphone = new Gadget("iphone", 4999);

  console.log(iphone.name);

  console.log(iphone.sell());

  ipad = Gadget.create("ipad", 3999);

  console.log(ipad.sell());

}).call(this);