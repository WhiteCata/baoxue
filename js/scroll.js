
		$(function(){  
		var nav=$(".float-header"); //得到导航对象  
		var win=$(window); //得到窗口对象  
		var sc=$(document);//得到document文档对象。  
		win.scroll(function(){  
		  if(sc.scrollTop()>=100){  
		    nav.addClass("flex-nav");   
		  }else{  
		   nav.removeClass("flex-nav");  
		  }  
		})    
		})  




		$(function(){  
		var nav=$(".floor5"); //得到导航对象  
		var win=$(window); //得到窗口对象  
		var sc=$(document);//得到document文档对象。  
		win.scroll(function(){  
		  if(sc.scrollTop()>=500){  
		    nav.show();   
		  }else{  
		   nav.hide();  
		  }  
		})    
		})  



//	function goTop()
//	 {
//	      $(window).scroll(function(e) {
//	         //若滚动条离顶部大于100元素
//	         if($(window).scrollTop()>100)
//	            $(".fonts").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
//	         else
//	              $(".fonts").fadeOut(1000);//以1秒的间隔渐隐id=gotop的元素
//	     });
//	 };
	 $(function(){
	     //点击回到顶部的元素
	     $(".fonts").click(function(e) {
	             //以1秒的间隔返回顶部
	             $('body,html').animate({scrollTop:0},1000);
	     });
	     $(" .fonts").mouseover(function(e) {
	         $(this).css("background","url(img/back-to-top.png) no-repeat -70px 0px");
	     });
	     $(" .fonts").mouseout(function(e) {
	         $(this).css("background","url(img/back-to-top.png) no-repeat -70px 0px");
	     });
//	     goTop();//实现回到顶部元素的渐显与渐隐
	 });
	 

	$(function(){
		$(".wechat").mouseenter(function(){
			$(" .erweima").css("visibility","visible");
		});
		$(".wechat").mouseout(function(){
			$(" .erweima").css("visibility","hidden");
		})
	})








