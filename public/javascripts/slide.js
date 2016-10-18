var move = function(){
	$("html,body").animate({
		scrollTop:0,
	},10);
}
var checkPos = function(pos){
	if($(window).scrollTop() > pos){
		$("#backTop").fadeIn();
	}else{
		$("#backTop").fadeOut();
	}
}
checkPos($(window).scrollTop());

$("#backTop").on('click',move);
$(window).on('scroll',function(){
	checkPos($(window).height());
});








