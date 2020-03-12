console.log('执行315zzy.js');

var time = new Date();
var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();

var year = time.getFullYear();
var month = time.getMonth() + 1;
var day = time.getDate();

document.getElementById('x1').innerHTML = hour + ':' + minute + ':' + second;

document.getElementById('x2').innerHTML = year + ':' + month + ':' + day;

setInterval(function() {
  time = new Date();
  hour = time.getHours();
  minute = time.getMinutes();
  second = time.getSeconds();
  document.getElementById('x1').innerHTML = hour + ':' + minute + ':' + second;
}, 1000);
setInterval(function() {
  time = new Date();
  hour = time.getHours();
  minute = time.getMinutes();
  second = time.getSeconds();
  document.getElementById('x2').innerHTML =
    year + '年' + month + '月' + day + '日';
}, 1000);

var x3 = document.getElementById('x3');
var z1 = '帅不是我的错,都是月亮惹的祸。';
var z2 = 0;



var djcs = 0;

var rqz = 0;

var sprq = document.getElementById('sprq');
var btnJoin = document.getElementById('btnJoin');

var img01 = document.getElementById('img01');
var img02 = document.getElementById('img02');

btnJoin.addEventListener('click', function() {
  djcs = djcs + 1;
  img01.setAttribute('class', 'animated shake');
  setTimeout(function() {
    img01.setAttribute('class', '');
  }, 1000);
  console.log('点击次数：', djcs);
});

setInterval(function() {
  
  rqz = rqz + djcs + 1550;
  sprq.innerHTML = rqz;

  if (rqz > 10000) {
    sp01.setAttribute('src', 'images/style01');
    sp01.setAttribute('class', 'animated jackInTheBox');
    sp02.setAttribute('src', 'images/style02');
    sp02.setAttribute('class', 'animated flash');
  }
}, 1000);


var ws = 0;

var wz = 0;

var we = document.getElementById('we');
var wr = document.getElementById('wr');

var img01 = document.getElementById('img01');
var img02 = document.getElementById('img02');

btnJoin.addEventListener('click', function() {
  ws = ws + 1;
  img01.setAttribute('class', 'animated shake');
  setTimeout(function() {
    img01.setAttribute('class', '');
  }, 1000);
  console.log('点击次数：', ws);
});
setInterval(function() {
    // 人气值自动根据人数上涨
    wz = wz + ws + 3100;
    sprq.innerHTML = rqz;
  
  }, 1000);


var count = 0;

document.getElementById('spCount').innerHTML = count;
//技术按钮的点击动作
document.getElementById('btnCount').addEventListener('click',function(){
    //通过 变量名称=新值；来修改变量的内容
    count = count + 1;
    document.getElementById('spCount').innerHTML = count;
});



document.getElementById('sp01').addEventListener('click',function(){
    document.getElementById('mian').setAttribute('class','style01');
  });
  
  document.getElementById('sp02').addEventListener('click',function(){
    document.getElementById('mian').setAttribute('class','style02');
  });