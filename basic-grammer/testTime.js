
// var date = new Date( time * 1000 );//.转换成毫秒
// var time = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' 
//            + (date.getMonth()+1) : (date.getMonth()+1)) + "-" 
//            + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;

// var d = new Date(); 
// console.log(d); // 输出：Mon Nov 04 2013 21:50:33 GMT+0800 (中国标准时间) 
// console.log(d.toDateString()); // 日期字符串，输出：Mon Nov 04 2013 
// console.log(d.toGMTString()); // 格林威治时间，输出：Mon, 04 Nov 2013 14:03:05 GMT 
// console.log(d.toISOString()); // 国际标准组织（ISO）格式，输出：2013-11-04T14:03:05.420Z 
// console.log(d.toJSON()); // 输出：2013-11-04T14:03:05.420Z 
// console.log(d.toLocaleDateString()); // 转换为本地日期格式，视环境而定，输出：2013年11月4日 
// console.log(d.toLocaleString()); // 转换为本地日期和时间格式，视环境而定，输出：2013年11月4日 下午10:03:05 
// console.log(d.toLocaleTimeString()); // 转换为本地时间格式，视环境而定，输出：下午10:03:05 
// console.log(d.toString()); // 转换为字符串，输出：Mon Nov 04 2013 22:03:05 GMT+0800 (中国标准时间) 
// console.log(d.toTimeString().substring(0,8)); // 转换为时间字符串，输出：22:03:05 GMT+0800 (中国标准时间) 
// console.log(d.toUTCString()); // 转换为世界时间，输出：Mon, 04 Nov 2013 14:03:05 GMT

// var time1 = (new Date()).getDate();
// var time2 = (new Date()).Format("yyyy-MM-dd HH:mm:ss");

// console.log('time1: ' + time1);
// console.log('time2: ' + time2);

function MinusTime(time1, time2) {
  var time1Array = time1.split(':');
  var time2Array = time2.split(':');

  // console.log (time1Array);
  // console.log (time2Array);

  if (time1Array.length !== time2Array.length) {
    return NaN;
  }

  for (var i = 0; i < time1Array.length; ++i) {
    time1Array[i] = parseInt(time1Array[i]);
    time2Array[i] = parseInt(time2Array[i]);
  }

  // console.log (time1Array);
  // console.log (time2Array);

  var result = (time1Array[0]*60+ time1Array[1])*60 + time1Array[2]
             - ((time2Array[0]*60+ time2Array[1])*60 + time2Array[2]);

  return result < 0 ? -result: result;
}

function testTime() {
  var time1 = (new Date()).toTimeString().substring(0,8);
  var time2 = time1;

  var testNumb = 50000;

  console.log('StartTime: ' + time1);

  for (var i =0 ; i < testNumb; ++i) {
    MinusTime(time1, time2);
  }

  time1 = (new Date()).toTimeString().substring(0,8);

  console.log('EndTime: ' + time1);
}

testTime();

// var time1 = d.toTimeString().substring(0,8);
// var time2 = "11:00:33"

// console.log (MinusTime(time2, time1)); 
// console.log ((new Date()).getTime())