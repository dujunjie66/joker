console.log('执行demo0007.js====>');
var a = 100;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a * a - b);
console.log(a * (a - b));
var jieguo = document.getElementById('jieguo');
console.log(jieguo);
var shuzi01 = document.getElementById('shuzi01');
var shuzi02 = document.getElementById('shuzi02');
console.log(shuzi01, shuzi02);
var jisuan = document.getElementById('jisuan');
var shuzi03 = document.getElementById('shuzi03');
var shuzi04 = document.getElementById('shuzi04');
var jieguo01 = document.getElementById('jieguo01');
jisuan.addEventListener('click', function() {
  jieguo.innerHTML = parseFloat(shuzi01.value) + parseFloat(shuzi02.value);
  jieguo01.innerHTML = shuzi03.value % shuzi04.value;
});
var donghua = document.getElementById('donghua');
var dh = document.getElementById('dh');
