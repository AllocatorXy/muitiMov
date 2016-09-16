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
function bufMov(obj,iTar) 
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var speed = (iTar-obj.offsetWidth)/10;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);

		if (obj.offsetWidth == iTar) 
		{
			clearInterval(obj.timer);
		}
		else
		{
			obj.style.width = obj.offsetWidth+speed+'px';
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