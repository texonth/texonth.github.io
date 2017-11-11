$(document).ready(function() {
	
	
	
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	//animation
	$(".animation_up-down").animated("fadeInUp", "fadeOutDown");
	$(".animation_down-up").animated("fadeInDown", "fadeOutUp")
	$(".animation_left-down").animated("fadeInLeft", "fadeOutDown");
	$(".animation_right-down").animated("fadeInRight", "fadeOutDown");
	
	//popup
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true,
		closeOnContentClick: true
	});
	
	//menu
	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		};
	});
	
	//portfolio

	
	
	
	$(".portfolio_item").each(function(i) {
		$(this).find(".popup_content").attr("href", "#work_" + i);
		$(this).find(".popup_descr").attr("id", "work_" + i);
	});
	
	$("input, select, textarea").jqBootstrapValidation();
	
	$(".nav_link").mPageScroll2id();
	

	
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");



}); 