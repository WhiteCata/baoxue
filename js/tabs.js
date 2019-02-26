

window.onload = function(){
	var aTab = document.querySelector(".navTab");
	var tabList = aTab.children;
	var aContent = document.querySelector(".content ");
	var contentList = aContent.children;
	
	for(var i=0;i<tabList.length;i++){
		tabList[i].index = i;
		tabList[i].onclick = function(){
			for(var j=0;j<contentList.length;j++){
				contentList[j].className ="";
				contentList[j].style.display = "none"
			}
			this.className="active";
			contentList[this.index].style.display="block";
		}
	}
}




