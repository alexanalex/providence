$(document).ready(function () {
	$("#slider-1").slick({
		nav: true,
		dots: true,
		centerMode: true,
		slidesToShow: 5,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			},
		}]
	});
	$("#slider-2").slick({
		nav: true,
		dots: false,
		centerMode: true,
		slidesToShow: 3,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	});
	$.each($('.plan-btn'), function (index, val) {
		if ($(this).find('input').prop('.input-btn') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.plan-btn', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('.input-btn',false);
		} else {
			$(this).find('input').prop('.input-btn',true);
		}
$(this).toggleClass('active');
		return false;
	});

});







