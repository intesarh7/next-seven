window.onload=function(){
	function darken_screen(yesno){
		if( yesno == true ){
			alert("False");
			document.querySelector('.screen-darken').classList.add('active');
		}
		else if(yesno == false){
			alert("False");
			document.querySelector('.screen-darken').classList.remove('active');
		}
	}
	
	function close_offcanvas(){
		darken_screen(false);
		document.querySelector('.mobile-offcanvas.show').classList.remove('show');
		document.body.classList.remove('offcanvas-active');
	}

	function show_offcanvas(offcanvas_id){
		darken_screen(true);
		document.getElementById(offcanvas_id).classList.add('show');
		document.body.classList.add('offcanvas-active');
	}

	document.addEventListener("DOMContentLoaded", function(){
		document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
			
			let offcanvas_id = everyelement.getAttribute('data-trigger');
			
			everyelement.addEventListener('click', function (e) {
				e.preventDefault();
	        	show_offcanvas(offcanvas_id);
	  			
			});
		});

		document.querySelectorAll('.btn-close').forEach(function(everybutton){
			
			everybutton.addEventListener('click', function (e) {
				e.preventDefault();
	        	close_offcanvas();
	  		});
		});

		document.querySelector('.screen-darken').addEventListener('click', function(event){
			close_offcanvas();
		});
		
    }); 
}

$(document).ready( function() {   

	$('.toggle').click(function(){
		$('.nav').toggleClass("justify-content-end");
		$('.toggle').toggleClass("text-light");
	});
	
	(function($) {

		$(".cata-sub-nav").on('scroll', function() {
			$val = $(this).scrollLeft();
	
			if($(this).scrollLeft() + $(this).innerWidth()>=$(this)[0].scrollWidth){
			  $(".nav-next").hide();
			} else {
				$(".nav-next").show();
			}
	
			if($val == 0){
				$(".nav-prev").hide();
			} else {
				$(".nav-prev").show();
			}
		  });
		console.log( 'init-scroll: ' + $(".nav-next").scrollLeft() );
		$(".nav-next").on("click", function(){
			$(".cata-sub-nav").animate( { scrollLeft: '+=460' }, 200);
			
		});
		$(".nav-prev").on("click", function(){
			$(".cata-sub-nav").animate( { scrollLeft: '-=460' }, 200);
		});
	
	
	})(jQuery);
});
var swiper = new Swiper(".testimonial-slider", {
	pagination: {
	  el: ".swiper-pagination",
	  dynamicBullets: true,
	},
  });