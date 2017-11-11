$(document).ready(function() {
	
	$(".side_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
 
       
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });



	
 
	function heightDetect() {
		$(".full_screen").css("min-height", $(window).height());
		
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	
	$(".toggle_mnu").click(function() {
  	$(".sandwich").toggleClass("active");
	});
	
	$(".top_mnu li a").click(function() {
  	$(".sandwich").toggleClass("active");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
		
	});
	

	
	$(".toggle_mnu").click(function() {
		
		if ( $(".top_mnu").is(":visible"))
		{
			
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		}
		else 
		{
			
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});
	
	
	
	$(".top_text").mouseenter(function() {
		$(".top_text").removeClass("h_opacify");
	});
	$(".top_text").mouseleave(function() {
		$(".top_text").addClass("h_opacify");
	});
	$("input,select,textarea").jqBootstrapValidation();
	
	$(".top_mnu ul a").mPageScroll2id();
	
});

$(window).load(function() {
	
	$(".loader_inner").fadeOut();
 	$(".loader").delay(400).fadeOut("slow");
							 
});
 
$(window).scroll(function(){
         var $sections = $('section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    });
	if ($(window).scrollTop() >= ($(window).height()) && $(".side_bar").is(":visible")) {
            $(".side_bar").addClass("fixed_menu");
												$(".section_wrap").css("margin-left", $(".side_bar").css("width"));
          } else {
            $(".side_bar").removeClass("fixed_menu");
												$(".section_wrap").css("margin-left", "0");
          };
 });
