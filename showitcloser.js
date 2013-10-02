// ShowItCloser
// https://github.com/lotinerik/showitcloser

(function( $ ) {
	$.fn.showItCloser = function(options){
		var settings = $.extend({
				maxWidth: "9999px",
				maxHeight: "9999px"
		}, options );
		
		$(this).each(function(){
			var unid = Math.floor(Math.random()* 100000000) + Math.floor(Math.random()* 100000000);
			$(this).addClass('showitcloser_link');
			$(this).wrap('<div id="showitcloser_wrapper_'+unid+'" class="showitcloser_wrapper" style="position:relative; display:inline-block"></div>');
			$('#showitcloser_wrapper_'+unid).bind('mouseover', function(){
				var bigImg = $(this).find('.showitcloser_img');
				if($(bigImg).length){
					$(bigImg).show();
				} else {
					var imgsrc = $(this).find('.showitcloser_link').attr('href');		
					$(this).append('<img src="'+imgsrc+'" class="showitcloser_img" style="max-width:'+settings.maxWidth+'; max-height:'+settings.maxHeight+'; z-index:10; position:absolute; top:0px; left:0px;" onload="showitcloser_posImg(this)" />');	
				}
			});
			
			$('#showitcloser_wrapper_'+unid).bind('mouseout', function(){
				$(this).find('.showitcloser_img').hide();		
			});
			
			
		});		
	}	
})(jQuery);


function showitcloser_posImg(img){
	var link = $(img).parent().find('.showitcloser_link');
	var linkWidth = $(link).width();
	var linkHeight = $(link).height();
	var imgWidth = $(img).width();
	var imgHeight = $(img).height();
	if(imgWidth>linkWidth){
		$(img).css('left', '-'+parseInt((imgWidth-linkWidth)/2)+'px');
	}
	if(imgHeight>linkHeight){
		$(img).css('top', '-'+parseInt((imgHeight-linkHeight)/2)+'px');
	}
}
