window.onload = function () 
{

	var aDiv = document.getElementsByTagName('div');

	for (var i = 0; i < aDiv.length; i++) 
	{
		aDiv[i].timer = null; // 这里是关键，自定义属性obj.timer用来储存定时器返回值
		aDiv[i].exLen = 50*i; // 追加长度，用于构建伸长后长度递增的效果

		aDiv[i].onmouseover = msOver;
		aDiv[i].onmouseout = msOut;
	}

};
function getStyle(obj,name) 
{
	
	if (obj.currentStyle) 
	{
		//IE低版本
		return obj.currentStyle[name];
	}
	else 
	{
		//FF等浏览器
		return getComputedStyle(obj,null)[name]; 
		//getComputedStyle函数中，第二个参数无用，任意设置
	}
}
function bufMov(obj,iTar) 
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var realWidth = parseInt(getStyle(obj,'width'));
		var speed = (iTar-realWidth)/10;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);

		if (realWidth == iTar) 
		{
			clearInterval(obj.timer);
		}
		else
		{
			obj.style.width = realWidth+speed+'px';
		}
	}, 15);
}
function msOver() 
{
	bufMov(this,300+this.exLen);
}
function msOut() 
{
	bufMov(this,70);
}