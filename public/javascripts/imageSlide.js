
// (function imageSlide(){
// 
	var lis = document.getElementsByTagName("li");
	var count = lis.length;
	var curIndex = 0;

	var initSlide = function(){
		var sidleWidth = lis[0].clientWidth;
		lis[count-1].style.cssText='z-index:101;-webkit-transform: translate3d('+sidleWidth+'px, 0, 0);';
		lis[0].style.cssText='z-index:101;-webkit-transform: translate3d('+0+'px, 0, 0);';
		lis[1].style.cssText='z-index:101;-webkit-transform: translate3d(-'+sidleWidth+'px, 0, 0);';
		// alert(lis);
	}

	var preSlide = function(){
		var slideNext = (curIndex) % count,
			slideCur = (curIndex - 1 + count) % count,
			slidePre = (curIndex - 2 + count) % count;
			curIndex = slideCur;
		sidleWidth = lis[0].clientWidth;
		lis[slideNext].style.cssText='z-index:101;-webkit-transform: translate3d(-'+sidleWidth+'px, 0, 0);';
		lis[slideCur].style.cssText='z-index:101;-webkit-transform: translate3d('+0+'px, 0, 0);';
		lis[slidePre].style.cssText='z-index:100;-webkit-transform: translate3d('+sidleWidth+'px, 0, 0);';
	}

	var nextSlide = function(){
		var slideNext = (curIndex) % count,
			slideCur = (curIndex + 1 + count) % count,
			slidePre = (curIndex + 2 + count) % count;
			curIndex = slideCur;
		sidleWidth = lis[0].clientWidth;
		lis[slideNext].style.cssText='z-index:101;-webkit-transform: translate3d('+sidleWidth+'px, 0, 0);';
		lis[slideCur].style.cssText='z-index:101;-webkit-transform: translate3d('+0+'px, 0, 0);';
		lis[slidePre].style.cssText='z-index:100;-webkit-transform: translate3d(-'+sidleWidth+'px, 0, 0);';
	} 




	initSlide();
	var preTime = null;
	var nextTime = null;
	function buttonPre(){
		buttonStop();
		if(preTime == null){
			preTime = setInterval(preSlide, 2000);
		}
	}
	function buttonStop(){
		if(preTime){
			clearInterval(preTime);
			preTime = null;
		}
		if(nextTime){
			clearInterval(nextTime);
			nextTime = null;
		}
	}
	function buttonNext(){
		buttonStop();
		if(nextTime == null){
			nextTime = setInterval(nextSlide, 2000);
		}
	}

// })()












