console.log('执行13.js');

var zhuche = document.getElementById('zhuche');
var k10 = document.getElementById('k10');
var k20 = document.getElementById('k20');
var k30 = document.getElementById('k30');
var txdh = document.getElementById('txdh');
var tishi1 = document.getElementById('tishi1'); 
var tishi2 = document.getElementById('tishi2'); 
var tishi3 = document.getElementById('tishi3'); 
var tishi4 = document.getElementById('tishi4'); 

console.log(txdh,k10, k20, k30 ,tishi1, tishi2,tishi3, tishi4,zhuche);

  zhuche.addEventListener('click', function() {

  var dh = txdh.value;
  dh = dh.replace(/\s/g, '');
  console.log('电话号码：', dh);
  if ( dh.length < 11 ) {
    document.getElementById('dh').setAttribute('class', 'my-input wrong');
    tishi1.innerHTML = '电话号码必须填写且是11位长度';
    txdh.focus();
    return;
  }
  if (dh.length == 11) {
    document.getElementById('dh').setAttribute('class', 'my-input');
    tishi1.innerHTML = '';
  }
  
  var k1 = k10.value;
  k1 = k1.replace(/\s/g, '');
  console.log('密码：', k1);
  if (  k1.length<6||k1.length>16 ) {
    document.getElementById('k1').setAttribute('class', 'my-input wrong');
    tishi2.innerHTML = '密码必须填写且长度是6-16位';
    k10.focus();
    return;
  }
if(6<k1.length<16) {
  document.getElementById('k1').setAttribute('class', 'my-input');
    tishi2.innerHTML = '';
  }

  var k2 = k20.value;
  k2 = k2.replace(/\s/g, '');
  console.log('密码：', k2);
  if ( k1!=k2) {
    document.getElementById('k2').setAttribute('class', 'my-input wrong');
    tishi3.innerHTML = '确认密码要和密码一致';
    k20.focus();
    return;
  }
  if (k1 == k2) {
    document.getElementById('k2').setAttribute('class', 'my-input');
    tishi3.innerHTML = '';
  }

  var k3 = k30.value;
  k3 = k3.replace(/\s/g, '');
  console.log('密码：', k3);
  if (k3.length == 0) {
    document.getElementById('k3').setAttribute('class', 'my-input wrong');
    tishi4.innerHTML = '请输入昵称';
    k30.focus();
    return;
  }
  if (k3 > 1) {
    document.getElementById('k3').setAttribute('class', 'my-input ');
    tishi4.innerHTML = '';
  }
  });

