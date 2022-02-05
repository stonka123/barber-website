$(document).ready(function () {
	$('.price').slick({
		// centerMode: true,
		mobileFirst: true,
		adaptiveHeight: true,
		centerPadding: '60px',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					// slidesToShow: 3,
				},
			},
			{
				breakpoint: 319,
				settings: {
					adaptiveHeight: true,
					arrows: false,
					centerMode: true,
					centerPadding: '4px',
					slidesToShow: 1,
				},
			},
		],
	})
})
