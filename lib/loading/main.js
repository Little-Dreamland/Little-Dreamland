
function leave() {
	var loading = document.getElementById("loading");
	var a= setTimeout("loading.style.transition='opacity 0.3s'",0);
	//设置透明度改变的过渡时间为0.3秒
	var b= setTimeout("loading.style.opacity=0",500);
	//0.5秒后加载动画开始变为透明
	var c= setTimeout("loading.style.display='none'",800);
	//当透明度为0的时候，隐藏掉它
}

setTimeout("document.getElementById('ld').innerHTML='LOADING'", 1000 );
setTimeout("document.getElementById('ld').innerHTML='LOADING.'", 2000 );
setTimeout("document.getElementById('ld').innerHTML='LOADING..'", 3000 );
setTimeout("document.getElementById('ld').innerHTML='LOADING...'", 4000 );
setTimeout("document.getElementById('ld').innerHTML='LOADING.'", 5000 );
setTimeout("document.getElementById('ld').innerHTML='LOADING..'", 6000 );
setTimeout("document.getElementById('ld').innerHTML='LOADING...'", 7000 );
setTimeout("document.getElementById('ld').innerHTML='哇<br>你还在'", 8000 );
setTimeout("document.getElementById('ld').innerHTML='你等一下<br>我去取东西'", 10000 );
setTimeout("document.getElementById('ld').innerHTML='取什么？'", 12000 );
setTimeout("document.getElementById('ld').innerHTML='娶你啊'", 14000 );
setTimeout("document.getElementById('ld').innerHTML='emmm<br>这次加载<br>时间有点长<br>不过没关系<br>我自己走吧'", 15000 );
setTimeout("leave()", 17000 );

document.onreadystatechange = subSomething;
function subSomething() {
if(document.readyState == "complete") {
   leave();
  console.log("LOAD COMPLETE!");
}
}

/*
$(document).ready(function(){
   $("#loading").fadeOut(500);
  console.log("page loaded complete");
    //要执行的js代码段
});
*/

