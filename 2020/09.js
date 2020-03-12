console.log('执行work0009.js====>');

var txtname = document.getElementById('txtname');
var txtpassword = document.getElementById('txtpassword');
var txtnickname = document.getElementById('txtnickname');
var zhuce = document.getElementById('zhuce');
var chongtian = document.getElementById('chongtian');
var divCuoWu = document.getElementById('divCuoWu');

zhuce.addEventListener('click', function() {
  var name = txtname.value;
  var password = txtpassword.value;
  var nickname = txtnickname.value;
  console.log(name, password, nickname);

  if (name.length == 0) {
    divCuoWu.setAttribute('class', 'animated bounceInUp');
    divCuoWu.innerHTML = '“请输入用户名后再登录”';
    setTimeout(function() {
      divCuoWu.innerHTML = '';
    }, 1500);
    return;
  }
  if (name.length <= 4) {
    divCuoWu.setAttribute('class', 'animated bounceInUp');
    divCuoWu.innerHTML = '“用户名不能少于4个字”';
    setTimeout(function() {
      divCuoWu.innerHTML = '';
    }, 1500);
    return;
  }
  if (password.length == 0) {
    divCuoWu.setAttribute('class', 'animated bounceInUp');
    divCuoWu.innerHTML = '“请输入密码后再登录”';
    setTimeout(function() {
      divCuoWu.innerHTML = '';
    }, 1500);
    return;
  }
  if (password.length <= 6) {
    divCuoWu.setAttribute('class', 'animated bounceInUp');
    divCuoWu.innerHTML = '“密码不能少于6位”';
    setTimeout(function() {
      divCuoWu.innerHTML = '';
    }, 1500);
    return;
  }
  if (nickname.length == 0) {
    divCuoWu.setAttribute('class', 'animated bounceInUp');
    divCuoWu.innerHTML = '“请输入昵称后再登录”';
    setTimeout(function() {
      divCuoWu.innerHTML = '';
    }, 1500);
    return;
  }
  divCuoWu.innerHTML = '“登录成功”';
});

chongtian.addEventListener('click', function() {
  divCuoWu.innerHTML =
    '<h8>你在无中生有</h8><h8></h8><h8>暗度陈仓</h8><h8>凭空想象</h8><h8>凭空捏造</h8><h8>胡言乱语</h8><h8>胡说八道</h8>'
  setTimeout(function() {
    divCuoWu.innerHTML = '';
  },3000);
});
