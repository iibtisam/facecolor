
$(document).ready(function(){
	homeCols();
	adjustHomeColumnHeight();
});


$( window ).resize(function() {
	homeCols();
	adjustHomeColumnHeight();
});




var homeCols = function(){

	var winHeight = $(window).height() - 65;
	var winWidth = $(window).width();

	$('.parallax-bg').css('height',winHeight);
	$('.homeColumn').css('height',winHeight);
	$('.homeColumn').css('width',(winWidth/3)-1);


}

var adjustHomeColumnHeight = function(){
	var winHeight = $('.homeColumn').height();
	for(var i=0; i< $('.overlayHomeColumn').length; i++){
		var textHeight = $($('.overlayHomeColumn')[i]).siblings('.overlayHomeColumnText').height();
		$($('.overlayHomeColumn')[i]).css('height',winHeight-(textHeight+50));
	}
}




var openColumnInfo = function(col_no){
	var href = window.location.href;
	var location = href.split('#');

	window.location.href = location[0]+'#!projects/project-'+col_no+'.html';
}


var removeOverlay = function(that){

console.log("removeOverlay");
	var center = ($('.homeColumn').height()/2) - ($(that).children('.overlayHomeColumnText').height()+50)/2;

	$(that).children('.overlayHomeColumn').hide();
	$(that).children('.overlayHomeColumnText').css('bottom', center);
}

var resetOverlay = function(that){
	$(that).children('.overlayHomeColumn').show();
	$(that).children('.overlayHomeColumnText').css('bottom', 0);
}