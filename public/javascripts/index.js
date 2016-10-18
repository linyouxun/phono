var toggerSideBar = function(){
        if(document.getElementById("sidebar").className == "sidebar sidebar-width"){
                document.getElementById("sidebar").className = "sidebar ";
                document.getElementById("content").className = "content content-width";
        }else{
                document.getElementById("sidebar").className =  "sidebar sidebar-width";
                document.getElementById("content").className =  "content";
        }
}

document.getElementById("sidebar").addEventListener('click',toggerSideBar);


var obj = {};
var obj2 = new Object();


