var count = 0;document.
getElementById('ee').
innerHTML = count;
document.getElementById('ww').
addEventListener('click',function(){  
// 通过 变量名称=新值；来修改变量的内容    
count = count + 1;    document.getElementById('ee').
innerHTML = count;  });