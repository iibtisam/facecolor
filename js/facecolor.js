winHeight = 0;
winWidth = 0;

$(document).ready(function(){
	homeCols();
	adjustHomeColumnHeight();
	menuEffect();
	showNews();
});


$( window ).resize(function() {
	homeCols();
	adjustHomeColumnHeight();
	adjustNewsPanel();
});


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
	var winWidth = $(window).width();
	var newsLength = $('.news-bg').length;
	var showNewsLength = $('.show-news').length;
	if(winWidth <=751){
		if(showNewsLength >1){
			for(i=1;i<4;i++){
				$($('.show-news')[i]).removeClass('show-news');
				$($('.show-news')[i]).hide();
			}
		}
	}else{
		var index = -1;
		console.log('showNewsLength', showNewsLength);
		if(showNewsLength == 1){
			for(i=0;i<newsLength;i++){
				if($($('.news-bg')[i]).hasClass('show-news')){
					index = i;
				}
			}
			if(index != -1){
				var temp = Math.floor(index/4);
				for(i=0;i<4;i++){
					$($('.news-bg')[(temp*4)+i]).addClass('show-news');
					$($('.news-bg')[(temp*4)+i]).fadeToggle(2000);;;
				}
			}
		}
	}
}


var showNews = function(){
	var winWidth = $(window).width();
	var newsLength = $('.news-bg').length;
	if(winWidth <=750){
		if(newsLength != 0){
			$($('.news-bg')[0]).fadeToggle(2000);;;
			$($('.news-bg')[0]).addClass('show-news');
		}
	}else{
		if(newsLength < 4){
			$('.news-bg').fadeToggle(2000);;;
			$('.news-bg').addClass('show-news');
		}else{
			for(var i=0;i<4;i++){
				$($('.news-bg')[i]).fadeToggle(2000);;
				$($('.news-bg')[i]).addClass('show-news');
			}
		}
	}
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
		$('#film').hide();
		$('#commercial').show();
		$("html, body").animate({ 
	        scrollTop: $('#commercial').offset().top 
	    }, 1000);
	}else{
		$('#commercial').hide();
		$('#film').show();
		$("html, body").animate({ 
	        scrollTop: $('#film').offset().top 
	    }, 1000);
	}
}


var removeOverlay = function(that){
	var center = ($('.homeColumn').height()/2) - ($(that).children('.overlayHomeColumnText').height()+50)/2;
	$(that).children('.overlayHomeColumnText').css('bottom', center);
}


var resetOverlay = function(that){
	$(that).children('.overlayHomeColumnText').css('bottom', 0);
}


var showNextNews = function(){
	var winWidth = $(window).width();
	var newsLength = $('.news-bg').length;
	var showNewsLength = $('.show-news').length;
	var index = -1
	if(winWidth <=750){

		for(i=0;i<newsLength;i++){
			if($($('.news-bg')[i]).hasClass('show-news')){
				index = i;
			}
		}
		if(index != -1){
			if((index+1)<newsLength){
				$($('.news-bg')[index]).removeClass('show-news');
				$($('.news-bg')[index]).hide();
				$($('.news-bg')[index+1]).addClass('show-news');
				$($('.news-bg')[index+1]).fadeToggle(2000);;
			}
		}
	}else{
		for(i=0;i<newsLength;i++){
			if($($('.news-bg')[i]).hasClass('show-news')){
				index = i;
			}
		}
		if(index != -1){
			if((index+1)<newsLength){
				for(var i=3;i>=0;i--){
					$($('.news-bg')[index-i]).removeClass('show-news');
					$($('.news-bg')[index-i]).hide();
				}
				for(var i=1;i<=4;i++){
					$($('.news-bg')[index+i]).addClass('show-news');
					$($('.news-bg')[index+i]).fadeToggle(2000);;;
				}
			}
		}		
	}
}


var showPreviousNews = function(){
	var winWidth = $(window).width();
	var newsLength = $('.news-bg').length;
	var showNewsLength = $('.show-news').length;
	var index = -1
	if(winWidth <=750){

		for(i=0;i<newsLength;i++){
			if($($('.news-bg')[i]).hasClass('show-news')){
				index = i;
			}
		}
		if(index != -1){
			if((index-1)>=0){
				$($('.news-bg')[index]).removeClass('show-news');
				$($('.news-bg')[index]).hide();
				$($('.news-bg')[index-1]).addClass('show-news');
				$($('.news-bg')[index-1]).fadeToggle(2000);;;
			}
		}
	}else{
		for(i=0;i<newsLength;i++){
			if($($('.news-bg')[i]).hasClass('show-news')){
				index = i;
			}
		}
		if(index != -1){
			if((index-1)>=3){

				for(var i=0;i<4;i++){
					$($('.news-bg')[index-i]).removeClass('show-news');
					$($('.news-bg')[index-i]).hide();
				}
				index = (Math.floor(index/4))*4;
				for(var i=1;i<=4;i++){
					$($('.news-bg')[index-i]).addClass('show-news');
					$($('.news-bg')[index-i]).fadeToggle(2000);;;
				}
			}
		}		
	}
}


videos = [{
                title: 'Sintel',
                href: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
                type: 'video/mp4',
                poster: 'http://media.w3.org/2010/05/sintel/poster.png'
            },{
                title: 'Big Buck Bunny',
                href: 'http://upload.wikimedia.org/wikipedia/commons/7/75/Big_Buck_Bunny_Trailer_400p.ogg',
                type: 'video/ogg',
                poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png800px-Big.Buck.Bunny.-.Opening.Screen.png'
            },{
                title: 'Elephants Dream',
                href: 'http://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/Elephants_Dream_%28high_quality%29.ogv/Elephants_Dream_%28high_quality%29.ogv.360p.webm',
                type: 'video/webm',
                poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
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