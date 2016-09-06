$(document).ready(function() {
	$('.partners .tabs li').click(function() {
		$('.partners .tabs li').removeClass('active');
		$(this).addClass('active');
		$('.info-panel').addClass('hidden');
		let firstClass = $(this).attr('class').split(' ')[0];
		$('#' + firstClass).removeClass('hidden');
	})	

	$('.partners .tabs li').click(function() {
		if ($(this).hasClass('second-line')) {
			$(".partners .tabs-panel .info-panel").css('top', '-275px');
		} else {
			$(".partners .tabs-panel .info-panel").css('top', '-260px');
		}
	});

	$('#menu li a').click(function() {
  		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 70;
		$('body,html').animate({scrollTop: top}, 1200);
	})

	//mobile menu-button
	$('.mobile-menu-btn').click(function(e){
		$(this).toggleClass('active');
		$('.fixed-menu .menu, .fixed-menu .call').toggleClass('active-mobile');
		e.preventDefault();
		return false;
	});
});