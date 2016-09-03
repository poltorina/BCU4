$(document).ready(function() {
	$('.partners .tabs li').click(function() {
		$('.partners .tabs li').removeClass('active');
		$(this).addClass('active');
		$('.info-panel').addClass('hidden');
		let firstClass = $(this).attr('class').split(' ')[0];
		$('#' + firstClass).removeClass('hidden');
	})	
});