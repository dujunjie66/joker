console.log('执行demo0008.js====>');

var djcs = 0;

var rqz = 100000;

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
  
  rqz = rqz + djcs - 1550;
  sprq.innerHTML = rqz;

  if (rqz < 0) {
   document.getElementById('hx').innerHTML = '<u>恭喜，boss已被击败</u>'
  }
}, 1000);