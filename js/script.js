$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 10000
	})

    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
});

$(document).ready(function(){
	$('.demo').slick({
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

		responsive: [{

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
				vertical: true,
				verticalSwiping: true,
				swipeToSlide: true,
				dots:false
			}
		}]
	});
});
