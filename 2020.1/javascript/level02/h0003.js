console.log('执行h0003.js');
//获取元素
var txtUsername = document.getElementById('txtUsername');
var btnOk = document.getElementById('btnOk');
var btnOk2 = document.getElementById('btnOk2');
var btnOk3 = document.getElementById('btnOk3');
var spInfo = document.getElementById('spInfo');
console.log(txtUsername, btnOk, spInfo, btnOk2, btnOk3);
// 获取元素的属性 元素.getAttribute('属性名称')
var attr = txtUsername.getAttribute('id');
console.log(attr);
attr = txtUsername.getAttribute('placeholder');
console.log(attr);
attr = txtUsername.getAttribute('class');
console.log('class:', attr);
// 判断输入是不是8-20
btnOk.addEventListener('click', function() {
  console.log('确定按钮点击');
  var username = txtUsername.value;
  username = username.replace(/\s/g, '');
  console.log('用户名：', username);
  if (username.length < 8) {
    spInfo.innerHTML = '长度不能小于8';
    txtUsername.focus();
    return;
  }
  if (username.length > 20) {
    spInfo.innerHTML = '长度不能大于20';
    txtUsername.focus();
    return;
  }
  spInfo.innerHTML = '';
});

btnOk2.addEventListener('click', function() {
  console.log('确定2点击');
  username = txtUsername.value.replace(/\s/g, '');
  // 逻辑或用 || 表示
  // a || b 只要一个为true,结果就是true
  if (username.length < 8 || username.length > 20) {
    spInfo.innerHTML = '长度要在8-20之间';
    txtUsername.focus();
    return;
  }
  spInfo.innerHTML = '';
});

btnOk3.addEventListener('click', function() {
  var username = txtUsername.value.replace(/\s/g, '');
  // if elseif else 这个是阶梯式判断
  // if(逻辑表达1){ 逻辑表达式1为真要执行的代码  }
  // else if(逻辑表达式2) { 逻辑表达式2为真要执行的代码 }
  //  ...
  // else{ 所有上面的表达式都不为真就执行这里面的代码 }
  // 阶梯判断是从上到下依次判断，任何一级判断为true，后面都不执行了
  if (username.length < 8) {
    spInfo.innerHTML = '长度小于8';
    txtUsername.focus();
  } else if (username.length > 20) {
    spInfo.innerHTML = '长度大于20';
    txtUsername.focus();
  } else {
    spInfo.innerHTML = '';
  }
  // 伪代码
  // 如果字符长度大于8就提示错误
});

// 切换文本框特效
var divInput = document.getElementById('divInput');
var btnStyle = document.getElementById('btnStyle');
console.log(divInput, btnStyle);
var count = 0;
btnStyle.addEventListener('click', function() {
  console.log('切换样式');
  count = count + 1;
  if (count % 2 == 1) {
    divInput.setAttribute('class', 'form-input error');
  } else {
    divInput.setAttribute('class', 'form-input');
  }
});