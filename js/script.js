$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 10000
	})

    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
});

$(document).ready(function(){
	window.scrollTo(0,1); 
	$('#portfolio-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		prevArrow: null,
		nextArrow: null,
		dots: true,
		dotsClass: 'slick-dots',
		pauseOnHover: true,
		pauseOnDotsHover: true,
		lazyLoad: 'progressive',

		responsive: [{

			breakpoint: 1700,
			settings:{
				slidesToShow: 4
			}
		},{

			breakpoint: 1350,
			settings:{
				slidesToShow: 3
			}
		},{

			breakpoint: 1000,
			settings:{
				slidesToShow: 2
			}
		},{

			breakpoint: 767,
			settings:{
				initialSlide: 1,
				slidesToShow: 2,
				vertical: true,
				verticalSwiping: true,
				swipeToSlide: true,
				dots: false
			}
		}]
	});
});

$(document).ready(function(){
	$('#news-slider').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		prevArrow: null,
		nextArrow: null,
		dots: true,
		dotsClass: 'slick-dots',
		pauseOnHover: true,
		pauseOnDotsHover: true
	});
});
