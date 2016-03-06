function creatFuncs (){
    var result = new Array();
    for (var i = 0; i < 10; ++i){
        result[i] = (function(num) {
            return function(){                
                return num;
            }
        }(i));
    }
    return result;
}

var result = creatFuncs();
for (var i = 0; i < result.length; ++i) {
    console.log(result[i]());
}

var color = "blue";

function getColor() {
    return color;
}

console.log(getColor());

color = "red";