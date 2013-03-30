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
	
	$('#projects img').click(function(){
		$(this).toggleClass('hidden');
		$(this).siblings('div').toggleClass('hidden');
	});
	
	$('.desc').click(function(){
		$(this).toggleClass('hidden');
		$(this).siblings('img').toggleClass('hidden');
	});
	
});