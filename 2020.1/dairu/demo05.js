console.log('你好呀demo05.js'); //输出到控制台的信息
//获取元素
var input01 = document.getElementById('input01'); //第一个输入框
var input02 = document.getElementById('input02'); //第二个输入框
var input03 = document.getElementById('input03'); //第三个输入框
var input04 = document.getElementById('input04'); //第四个输入框
var zhuche = document.getElementById('zhuche'); //注册按钮
var tishi1 = document.getElementById('tishi1'); //信息提示1
var tishi2 = document.getElementById('tishi2'); //信息提示2
var tishi3 = document.getElementById('tishi3'); //信息提示3
var tishi4 = document.getElementById('tishi4'); //信息提示4
console.log(
  input01,
  input02,
  input03,
  input04,
  zhuche,
  tishi1,
  tishi2,
  tishi3,
  tishi4
);

//注册按钮 点击事件
zhuche.addEventListener('click', function() {
  var kuang1 = input01.value; //输入框1的值
  kuang1 = kuang1.replace(/\s*/g, ''); //去掉空白字符
  var kuang2 = input02.value; //输入框2的值
  kuang2 = kuang2.replace(/\s*/g, '');
  var kuang3 = input03.value; //输入框3的值
  kuang3 = kuang3.replace(/\s*/g, '');
  var kuang4 = input04.value; //输入框4的值

  //第一个框的判断
  if (kuang1.length < 11) {
    document.getElementById('kuangse1').setAttribute('class', 'my-input wrong');
    tishi1.innerHTML = '电话号码必须填写而且是11位数！';
    input01.focus(); //focus表示元素获取焦点
    return;
  }
  if (kuang1.length == 11) {
    document.getElementById('kuangse1').setAttribute('class', 'my-input ');
    tishi1.innerHTML = '';
  }
  
  //第二个输入框的判断
  //  a|| b   只要一个为真，结果就是真
  if (kuang2.length < 6 || kuang2.length > 16) {
    document.getElementById('kuangse2').setAttribute('class', 'my-input wrong');
    tishi2.innerHTML = '密码长度要在6-16之间';
    input02.focus();
    return;
  }
  document.getElementById('kuangse2').setAttribute('class', 'my-input ');
  tishi2.innerHTML = '';

  //第三个输入框的判断

  if (kuang2 != kuang3) {
    document.getElementById('kuangse3').setAttribute('class', 'my-input wrong');
    tishi3.innerHTML = '确认要和前面密码一致!';
    input03.focus();
    return;
  }
  if (kuang2 == kuang3) {
    document.getElementById('kuangse3').setAttribute('class', 'my-input ');
    tishi3.innerHTML = '';
  }

  //第四个输入框的判断

  if (kuang4 == 0) {
    document.getElementById('kuangse4').setAttribute('class', 'my-input wrong');
    tishi4.innerHTML = '昵称不能为空！';
    input04.focus();
    return;
  }
  if (kuang4 > 1) {
    document.getElementById('kuangse4').setAttribute('class', 'my-input ');
    tishi4.innerHTML = '';
  }
});
