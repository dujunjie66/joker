cconsole.log('执行demo0009.js');



if (index == info.length)

var txtInfo = document.getElementById('txtInfo');
var btnInfo = document.getElementById('txtInfo');
var spInfo = document.getElementById('txtInfo');

btnInfo.addEventListener('click',function() {
    spInfo.innerHTML = txtInfo.value + '---' + txtInfo.value.length;
});

var txtName=document.getElementById('txtName');
var txtPwd=document.getElementById('txtPwd');
var btnDenglu=document.getElementById('txtDenglu');
var spCuoWu=document.getElementById('txtCuoWu');

btnDenglu.addEventListener('clik',function(){
    var name = txtName.value;
    var pwd = txtPwd.value;
    console.log(name,pwd);
    spCuoWu.innerHTML='';
    if (name.length <=4){
        spCuoWu.innerHTML = '用户名的长度不能小于等于4个';
        return;
    }
    if(pwd,length <6) {
        spCuoWu.innerHTML = '密码的长度不能小于6个';
    }
    spCuoWu.innerHTML = '欢迎：'+  name;
});