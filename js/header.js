$(function(){
	$(".dropdown").mouseover(function(){
		$(".up").hide().next().show();
	});
	$(".dropdown").mouseout(function(){
		$(".up").show().next().hide();
	});

});



$(function(){
	$(".user").mouseenter(function(){
		$(".user-list").css("visibility","visible");
//		alert("test!");
		});
		$(".user").mouseleave(function(){
			$(".user-list").css("visibility","hidden");
//		alert("test!");
		});
})
