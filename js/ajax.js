 var xmlHttp;

    //创建一个xmlHttpRequest对象
    window.onload = function createxmlHttp() {
        try {
            //尝试创建 xmlHttpRequest 对象，除 IE 外的浏览器都支持这个方法。  
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            try {
                //使用较新版本的 IE 创建 IE 兼容的对象（Msxml2.xmlHttp）。  
                xmlHttp = ActiveXObject("Msxml12.XMLHTTP");
            } catch (e1) {
                try {
                    //使用较老版本的 IE 创建 IE 兼容的对象（Microsoft.xmlHttp）。  
                    xmlHttp = ActiveXObject("Microsoft.XMLHTTP");
                } catch (e2) {
                    flag = false;
                }
            }
        }

        //判断是否成功的例子：  
        if (!xmlHttp) {
            alert("creat XMLHttpRequest Object failed.");
        }
    }