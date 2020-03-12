console.log('执行demo0006.js')
//  获取当前的时间
//  var 变量名=变量值;new Date()就是获取当前的日期时间
var now = new Date();
console.log(now);
//  获取时间的某一个部分
// 年，月，日月份是0-11，表示1-12月
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log('年;',year);
console.log('月',month);
console.log('日',day);

document.getElementById('sp').innerHTML =
year + ':' + month + ':' + day;

// 反复间隔时间执行代码
// 第一个参数是要执行的代码，第二个参数是间隔的毫秒值，1000就是一秒
setInterval(function() {
  // console.log(new Date());
  now = new Date ();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  document.getElementById('sp').innerHTML =
  year + ':' + month + ':' + day;
},30);

// 小时, 分钟， 秒
var hour = now.getHours();
var minute = now.getMinutes();
var second = now .getSeconds();
console.log('小时:', hour);
console.log('分钟',minute);
console.log('秒',second);

document.getElementById('spTime').innerHTML =
hour + ':' + minute + ':' + second;

// 反复间隔时间执行代码
// 第一个参数是要执行的代码，第二个参数是间隔的毫秒值，1000就是一秒
setInterval(function() {
  // console.log(new Date());
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  // 时间后面补0
  second = second < 10 ? '0' + second : '' + second;
  document.getElementById('spTime').innerHTML =
  hour + ':' + minute + ':' + second;
},1000);
// 作业：将时间显示成xxx年xx月xx日 xx时xx分xx秒，思考：不显示秒，但是一分钟更新一次

