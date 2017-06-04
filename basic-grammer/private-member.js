// 构造函数模式

// var PersonA = function(name) {
//     var _name = name;
// }

// 原型模式
(function(){
    var _name = "";

    PersonB = function(name){
        _name = name;
    }

    PersonB.prototype.setName = function(name) {
        _name = name;
    }

    PersonB.prototype.getName = function() {
        return _name
    }
})();

var personb = new PersonB("lu");
console.log (personb.getName());
personb.setName("Sheng");
console.log (personb.getName());