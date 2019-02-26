		var list= document.querySelector(".slide_img_container");
		var next = document.querySelector(".arrow_right");
		var prev = document.querySelector(".arrow_left");

		next.onclick = function(){
			next_pic();
		}
		prev.onclick = function(){
			prev_pic();
		}

		function next_pic(){
			index++;
			if(index > 3){
				index = 0;
			}
			showCurrentDot();
			var newLeft;
			if(list.style.left ==="-6400px"){
				newLeft = -2560;
			} else {
				newLeft=parseInt(list.style.left)-1280;
			}
			list.style.left = newLeft + 'px';
		}

		function prev_pic(){
			index--;
			if(index<0){
				index = 3;
			}
			showCurrentDot();
			var newLeft;
			if(list.style.left === "0px") {
				newLeft = -3840;
			} else {
				newLeft = parseInt(list.style.left)+1280;
			}
			list.style.left = newLeft + 'px';
		}
		// 一函数可以被多个事件绑定使用
			var timer = null;
			function autoPlay(){
				clearInterval(timer);
				timer = setInterval(function(){
					next_pic();
						},1000);
			}

			autoPlay();


			var nav = document.querySelector(".slide_contents");
			nav.onmouseover = function(){
				clearInterval(timer);
			}
			nav.onmouseout = function(){
				autoPlay();
			}


			var index = 0;
			var dots = document.getElementsByTagName("span");

			function showCurrentDot(){
				for(var i=0,len=dots.length;i<len;i++){
					dots[i].className = "";
				}
				dots[index].className="on";
			}


			for(var i=0,len=dots.length;i<len;i++){
				(function(i){
					dots[i].onclick = function(){
						var dis = index - i;
						if(index==3 && parseInt(list.style.left)!==-5120){
								dis = dis-4;
						}
						if(index == 0 && parseInt(list.style.left) !== -1280){
								dis = 4+dis;
					}			
					list.style.left = (parseInt(list.style.left)+dis*1280) +'px';
					index = i;
					showCurrentDot();
					}
				})(i);
			}
