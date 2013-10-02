// ShowItCloser
// https://github.com/lotinerik/showitcloser

$.fn.showItCloser = function(){
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
				$(this).append('<img src="'+imgsrc+'" class="showitcloser_img" style="max-width:300px; max-height:300px; z-index:10; position:absolute; top:-50px; left:-30px;" />');	
			}
		});
		
		$('#showitcloser_wrapper_'+unid).bind('mouseout', function(){
			$(this).find('.showitcloser_img').hide();		
		});
		
		
	});
	
}
