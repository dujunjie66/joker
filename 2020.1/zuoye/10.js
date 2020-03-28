console.log('执行zuoye09.js===>');

var a = 100;
var b = 3;
var x0 = document.getElementById('x0');
var x1 = document.getElementById('x1');
var x2 = document.getElementById('x2');
var x3 = document.getElementById('x3');
var x4 = document.getElementById('x4');
var x5 = document.getElementById('x5');
var x6 = document.getElementById('x6');
var z1 = document.getElementById('z1');
var z2 = document.getElementById('z2');
var z3 = document.getElementById('z3');
var z4 = document.getElementById('z4');
var z5 = document.getElementById('z5');
var z6 = document.getElementById('z6');
var z7 = document.getElementById('z7');
var z8 = document.getElementById('z8');
var z9 = document.getElementById('z9');

x0.addEventListener('click', function() {
  x3.innerHTML = x1.value + x2.value;
  x6.innerHTML = x4.value - x5.value;
  z3.innerHTML = z1.value * z2.value;
  z6.innerHTML = z4.value / z5.value;
  z9.innerHTML = z7.value % z8.value;
});

var q1 = document.getElementById('q1');

x0.addEventListener('click', function() {
  var q0 = z8.value;
  if (isNaN(q0)) {
    q1.innerHTML = '输入不是数';
    return;
  }
  q0 = parseFloat(q0);
  if (q0) {
    q1.innerHTML = q0 + '';
  }
});
