console.log('执行demo0006.js')
var now = new Date();
console.log(now);
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log('年;',year);
console.log('月',month);
console.log('日',day);

document.getElementById('sp').innerHTML =
year + ':' + month + ':' + day;

setInterval(function() {
  now = new Date ();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  document.getElementById('sp').innerHTML =
  year + ':' + month + ':' + day;
},30);

var hour = now.getHours();
var minute = now.getMinutes();
var second = now .getSeconds();
console.log('小时:', hour);
console.log('分钟',minute);
console.log('秒',second);

document.getElementById('spTime').innerHTML =
hour + ':' + minute + ':' + second;

setInterval(function() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  second = second < 10 ? '0' + second : '' + second;
  document.getElementById('spTime').innerHTML =
  hour + ':' + minute + ':' + second;
},1000);


