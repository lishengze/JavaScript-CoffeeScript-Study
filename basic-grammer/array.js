function outputMessage(des, data) {
    console.log (des);
    console.log (data);
}
function testSlice() {
    var tmpArray = [0,1,2,3];
    var start = -3;
    var tmp1 = Array.prototype.slice.call(tmpArray, start);
    outputMessage('orginal data: ', tmpArray);
    outputMessage('start=1: ', tmp1);
}

function main() {
    testSlice();
}

main();