winHeight = 0;
winWidth = 0;

$(document).ready(function(){
	homeCols();
	adjustHomeColumnHeight();
	menuEffect();

});


$( window ).resize(function() {
	homeCols();
	adjustHomeColumnHeight();
});


var menuEffect = function(){
	$(".main-menu div").hover(function(){ //mouseenter
       	$(this).animate({"top":-10, "height": 41, "padding-top":23},200);
    }, function(){ //mouseleave
       	$(this).animate({"top":-25, "height": 33, "padding-top":31},50);
    });
}

var homeCols = function(){

	winHeight = $(window).height() - 65;
	winWidth = $(window).width();

	// $('.parallax-bg').css('height',winHeight);
	// $('.home-parallax').css('height',winHeight);
	$('.homeColumn').css('height',winHeight);
	$('.homeColumn').css('width',(winWidth/3)-1);

}

var adjustHomeColumnHeight = function(){
	
	var winHeight = $('.homeColumn').height();

	
	for(var i=0; i< $('.homeColumn').length; i++){
		var textHeight = $($(".homeColumn")[i]).children('.overlayHomeColumnText').height()+50;
		var overlayHeight = winHeight - textHeight;
		
		$($('.overlayHomeColumn')[i]).css('height',overlayHeight);
	
		$($(".homeColumn")[i]).unbind("hover")
		$($(".homeColumn")[i]).hover(function(){ //mouseenter
	
	       	$(this).children('.overlayHomeColumn').animate({height:0},200);
	       	$(this).children('.overlayHomeColumnText').delay(200).animate({'bottom': overlayHeight/2},200);
	
	    }, function(){ //mouseleave
	
	        $(this).children('.overlayHomeColumn').delay(200).animate({height:overlayHeight},200);
	        $(this).children('.overlayHomeColumnText').animate({'bottom': 0},200);
	
	    });
	}

	$($('#joinus').children('.parallax-bg')).css("height","100%");
}




var openColumnInfo = function(col_no){
	var href = window.location.href;
	var location = href.split('#');

	window.location.href = location[0]+'#!projects/project-'+col_no+'.html';
}


var removeOverlay = function(that){

	var center = ($('.homeColumn').height()/2) - ($(that).children('.overlayHomeColumnText').height()+50)/2;

	$(that).children('.overlayHomeColumnText').css('bottom', center);

}

var resetOverlay = function(that){
	$(that).children('.overlayHomeColumnText').css('bottom', 0);
}