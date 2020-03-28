console.log('执行12,.js');

var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var pd = document.getElementById('pd');
var divResult = document.getElementById('divResult');
console.log('a1,a2,divResult,pd');

pd.addEventListener('click',function() {
  console.log('开始做判断');
  var val01 = a1.value;
  var my = a2.value; 
  console.log('输入的值：', val01, my, val01.length, my.length);
  divResult.innerHTML = '第一个值是：' + val01 + '<br>';
  divResult.innerHTML = divResult.innerHTML + '第二个值是：' + my + '<br>';
  val01 = val01.replace(/\s*/g, '');
  my = my.replace(/\s*/g, '');
  console.log('去掉空格之后的值：', val01, my, val01.length, my.length);
  if (val01.length == 0) {
    divResult.innerHTML =
      divResult.innerHTML + '第一个信息没有输入有效内容<br>';
    a1.focus();
    return;
  }
  if (my.length == 0) {
    divResult.innerHTML = divResult.innerHTML + '第二个要输入<br>';
    a2.focus();
    return;
  }
     
     divResult.innerHTML =
     divResult.innerHTML + '大于的判断结果：' + (val01 > my) + '<br>';
     divResult.innerHTML =
     divResult.innerHTML + '大于或者等于的判断结果：' + (val01 >= my) + '<br>';
     divResult.innerHTML=
     divResult.innerHTML + '小于的判断结果：' + (val01 < my) + '<br>';
     divResult.innerHTML =
     divResult.innerHTML + '小于或者等于的判断结果：' + (val01 <= my) + '<br>';
     divResult.innerHTML += '不相等测试的结果' + (val01 != my) + '<br>';
     divResult.innerHTML += '取反操作不相等测试的结果' + !(val01 == my) + '<br>';
     divResult.innerHTML += '相等测试的结果' + !(val01 = my) + '<br>';
     divResult.innerHTML += '取反操作相等测试的结果' + (val01 !== my) + '<br>';

     divResult.innerHTML =
     divResult.innerHTML + '第一个长的判断结果：' + (val01 > my) + '<br>';
     divResult.innerHTML =
     divResult.innerHTML + '第二个长的判断结果：' + (val01 < my) + '<br>';
     divResult.innerHTML=
     divResult.innerHTML + '两个长度相等的判断结果：' + (val01 == my) + '<br>';
     divResult.innerHTML += '取反操作长度相等测试的结果' + !(val01 !== my) + '<br>';
     divResult.innerHTML =
     divResult.innerHTML += '长度不相等测试的结果' + (val01 != my) + '<br>';
     divResult.innerHTML += '取反操作长度不相等测试的结果' + !(val01 == my) + '<br>';
});