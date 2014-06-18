$(document).ready(function(){
	$('.color').mouseover(function(e){
		var color = $(this).attr('class').replace('color', '');
		$('body').removeClass();
		$('body').addClass(color);
	});

	$('.color').mouseout(function(e){
		$('body').removeClass();
	});
});