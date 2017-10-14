$(document).ready(function(){

	var toggleBtn = $(".nav-toggle-button");
		navigation = $("nav");

		toggleBtn.click(function(){
			navigation.slideToggle();
			console.log("hello");
		});

	// logo carousel
	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin:10,
	    nav: true, 
	    stagePadding: 30,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	        },
	        1000:{
	            items:6,
	            loop:false
	        }
	    }
	});
});