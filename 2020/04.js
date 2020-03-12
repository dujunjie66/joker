console.log('执行04.js');

var anidiv = document.getElementById('anidiv');
var dh01 = document.getElementById('dh01');
var dh02 = document.getElementById('dh02');
var dh03 = document.getElementById('dh03');
var dh04 = document.getElementById('dh04');
var dh05 = document.getElementById('dh05');
var dh06 = document.getElementById('dh06');

document.getElementById('dh01').addEventListener('click', function() {
  document.getElementById('anidiv').setAttribute('class', 'animated flash');

  setTimeout(function() {
    document.getElementById('anidiv').setAttribute('class', '');
  }, 1000);
});

//第二个
document.getElementById('dh02').addEventListener('click', function() {
  document
    .getElementById('anidiv')
    .setAttribute('class', 'animated shake 0.5s infinite');

  setTimeout(function() {
    document.getElementById('anidiv').setAttribute('class', '');
  }, 1000);
});
//第三个
document.getElementById('dh03').addEventListener('click', function() {
  document.getElementById('anidiv').setAttribute('class', 'myani');

  setTimeout(function() {
    document.getElementById('anidiv').setAttribute('class', '');
  }, 1000);
});

//作业一：加到五个以上的动画效果，最好是有自定义的动画
//第四个
document.getElementById('dh04').addEventListener('click', function() {
  document
    .getElementById('anidiv')
    .setAttribute('class', 'animated fadeInDown');

  setTimeout(function() {
    document.getElementById('anidiv').setAttribute('class', '');
  }, 1000);
});

//第五个

document.getElementById('dh05').addEventListener('click', function() {
  document.getElementById('anidiv').setAttribute('class', 'animated wobble');
  setTimeout(function() {
    document.getElementById('anidiv').setAttribute('class', '');
  }, 1000);
});

//di6ge
document.getElementById('dh06').addEventListener('click', function() {
  document.getElementById('anidiv').setAttribute('class', 'animated rubberBand');
  setTimeout(function() {
    document.getElementById('anidiv').setAttribute('class', '');
  }, 1000);
});