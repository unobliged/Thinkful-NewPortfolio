$(document).ready(function() {

	$('#click-a').click(function(e){
		e.preventDefault();		
		$('#about').removeClass('hidden');
		$('#projects').addClass('hidden');		
	});
	
	$('#click-p').click(function(e){
		e.preventDefault();		
		$('#about').addClass('hidden');
		$('#projects').removeClass('hidden');		
	});
	
	/*
	$('#projects img').hover(function(e){
		var lg_src = $(this).attr('src').replace('tn_','');
		$('#expand').toggleClass('hidden');
		$('#expand img').attr('src', lg_src);
	});
	
	
	$(window).resize(function(){
		var doc_height = $(document).height();
		var win_height = $(window).height();
		
		if(doc_height > win_height){				
			$('#projects').css('height', doc_height);
		}
	});
	*/
	
});