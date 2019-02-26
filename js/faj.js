function $id(id){
	return document.getElementById(id);
}
//通过封装函数Id快速获取DOM节点对象.
window.onload = function(){  //onload事件会在页面或图像加载完成后立即发生。
	
	
	var oBox = $id("box");
	var oMiddle = $id("middle_box");
	var oMidImg = $id("m_img");
	var oShadow = $id("shadow");
//	var oLarbox = $id("large_box");
//	var oLarImg = $id("large_img");
	
	var oSmallBox = $id("small_box");
	var aSmallImg = oSmallBox.getElementsByTagName("img");
	
	for(var i = 0; i<aSmallImg.length;i++){
		aSmallImg[i].onmouseenter = function(){
			for(var j=0;j<aSmallImg.length;j++){
				aSmallImg[j].className = "";
			}
			this.className = "cur";
			oMidImg.src = "../img/list/list"+this.src.slice(this.src.indexOf('-'));
//			oLarImg.src = "img/large"+this.src.slice(this.src.indexOf('-'));
		}
	}
	

	oMiddle.onmouseover = function(){
		oShadow.style.display = "block";
//		oLarbox.style.display = "block";
	}//鼠标经过遮挡块和放大图显示
	oMiddle.onmouseout = function(){
		oShadow.style.display = "none";
//		oLarbox.style.display = "none"
	}//鼠标移除遮挡块和放大图隐藏
	
	var mw = oMiddle.clientWidth;
	var mh = oMiddle.clientHeight;
	//正常图获取鼠标在页面可视区域的位置坐标
	
	
	oMiddle.onmousemove = function(e){
		var evt = e || event;
		var sw = oShadow.offsetWidth;
		var sh = oShadow.offsetHeight;//遮挡块的可见区域宽高（包含边线的宽）
		
		var _left = evt.clientX - oBox.offsetLeft - oShadow.offsetWidth/2;
		var _top = evt.clientY -oBox.offsetTop - oShadow.offsetHeight/2;
		//遮挡块的位置确定
		
		_left = _left <= 0 ? 0: _left >= mw-sw ? mw-sw:_left;//先判断_left<=0,成立时_left=0;不成立时继续判断-left>=..,
		//第一个判断控制左边不让出去 ，第二个判断控制右边不让出去.
		//var a = 10;
		//var b = a=20?30:10;分析一下10，
		_top =_top <=0 ? 0:_top >= mh-sh ? mh-sh:_top;
		
		oShadow.style.left = _left+"px";
		oShadow.style.top = _top+"px";
		
//		oLarImg.style.left = - _left/mw*oLarImg.offsetWidth+"px";
//		oLarImg.style.top = - _top/mw*oLarImg.offsetHeight+"px";
	}
}