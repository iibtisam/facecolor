winHeight = 0;
winWidth = 0;
animationTime  = 500;

$(document).ready(function(){
	homeCols();
	adjustHomeColumnHeight();
	menuEffect();
	showNews();
	showNextNews();
	showPreviousNews();
});



$( window ).resize(function() {
	homeCols();
	adjustHomeColumnHeight();
	adjustNewsPanel();
});

window.onscroll = function (event) {
	// $('#commercial').offset().top + ($('#commercial').height() - $(window).height())
	// var winPos = $(window).scrollTop();
	// var container = $('.face-color-container')
	// container.css('position', 'relative');
	// for(i=0; i<container.length; i++){
	// 	var containerPos = $(container[i]).offset().top + ($(container[i]).height() - $(window).height())
	// 	if($(container[i]).css('display') != 'none'){
	// 		if(containerPos > winPos-50 && containerPos < winPos+50){
	// 			console.log(container[i]);
	// 			$(container[i]).css('position', 'relative');
	// 			$(container[i]).css('top', containerPos);
	// 		}
	// 	}
	// }
}


var menuEffect = function(){
	$(".main-menu div").hover(function(){ //mouseenter
       	$(this).animate({"top":-10, "height": 41, "padding-top":23},200);
    }, function(){ //mouseleave
       	$(this).animate({"top":-25, "height": 33, "padding-top":31},50);
    });
}


var homeCols = function(){
	$('.homeColumn').css('height',($(window).height() - 59));
}


var adjustNewsPanel = function(){

	var w = $('.four_custom.columns').width();
	var count = $('.four_custom.columns').length;
	
	$('#news-container').css('width',((w+10)*count));
}


var showNews = function(){

	var w = $('.four_custom.columns').width();
	var count = $('.four_custom.columns').length;
	
	$('#news-container').css('width',((w+10)*count));
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
	if(col_no == 1){
		$('.mainContainerInfo').hide();
		$('#commercial').show();
		$("html, body").animate({ 
	        scrollTop: $('#commercial').offset().top
	    }, animationTime);
	}else if(col_no == 2){
		$('.mainContainerInfo').hide();
		$('#film').show();
		$("html, body").animate({ 
	        scrollTop: $('#film').offset().top 
	    }, animationTime);
	}
	else{
		$('.mainContainerInfo').hide();
		$('#event').show();
		$("html, body").animate({ 
	        scrollTop: $('#event').offset().top 
	    }, animationTime);

	}
}


var removeOverlay = function(that){
	var center = ($('.homeColumn').height()/2) - ($(that).children('.overlayHomeColumnText').height()+50)/2;
	$(that).children('.overlayHomeColumnText').css('bottom', center);
}


var resetOverlay = function(that){
	$(that).children('.overlayHomeColumnText').css('bottom', 0);
}

var slideRightSide = function(){
	var l = $('#news-container').css('left');
	l = parseInt(l.split('px')[0])
	var limit = $('#news-container-wrapper').width()-$('#news-container').width();
	if(l<= limit){
		$('#news-container').css('left',limit);
		$('#news-container').stop();
		return;
    }
   	$('#news-container').animate({"left": (l-10)},50, function(){
   		slideRightSide();
   	});

}

 showNextNews = function(){
	$("#next-news").hover(function(){ //mouseenter
		slideRightSide();
    }, function(){ //mouseleave
       	var l = $('#news-container').css('left');
		l = parseInt(l.split('px')[0])
	   	$('#news-container').stop();
    });

}

var slideLeftSide = function(){
	var l = $('#news-container').css('left');
	l = parseInt(l.split('px')[0])
	if(l>=0){
		$('#news-container').css('left',0);
		$('#news-container').stop();
		return;
	}
   	$('#news-container').animate({"left": (l+10)},50, function(){
   		slideLeftSide();
   	});

}

var showPreviousNews = function(){

	$("#previous-news").hover(function(){ //mouseenter
		slideLeftSide();
    }, function(){ //mouseleave
	   	$('#news-container').stop();
    });
}


videos = [{
            //     title: 'Sintel',
            //     href: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
            //     type: 'video/mp4',
            //     poster: 'http://media.w3.org/2010/05/sintel/poster.png'
            // },{
            //     title: 'Big Buck Bunny',
            //     href: 'http://upload.wikimedia.org/wikipedia/commons/7/75/Big_Buck_Bunny_Trailer_400p.ogg',
            //     type: 'video/ogg',
            //     poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png800px-Big.Buck.Bunny.-.Opening.Screen.png'
            // },{
            //     title: 'Elephants Dream',
            //     href: 'http://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/Elephants_Dream_%28high_quality%29.ogv/Elephants_Dream_%28high_quality%29.ogv.360p.webm',
            //     type: 'video/webm',
            //     poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
            // },{
            //     title: 'LES TWINS - An Industry Ahead',
            //     href: 'http://www.youtube.com/watch?v=zi4CIXpx7Bg',
            //     type: 'text/html',
            //     youtube: 'zi4CIXpx7Bg',
            //     poster: 'http://img.youtube.com/vi/zi4CIXpx7Bg/0.jpg'
            // },{
            //     title: 'KN1GHT - Last Moon',
            //     href: 'http://vimeo.com/73686146',
            //     type: 'text/html',
            //     vimeo: '73686146',
            //     poster: 'http://b.vimeocdn.com/ts/448/835/448835699_960.jpg'
            }];


var showVideoGallery = function(index){
	arr = [];
	for (i=0;i<videos.length; i++){
		arr[i] = videos[(index+i)%videos.length];
	}
	blueimp.Gallery(arr, $('#blueimp-gallery').data());
}


var closeContainer = function(container){

		$("html, body").animate({ 
	        scrollTop: 0
	    }, animationTime, function(){
	    	$('#'+container).hide();	
	    });
	    

}