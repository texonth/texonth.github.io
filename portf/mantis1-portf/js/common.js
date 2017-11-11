$(document).ready(function () {


	particlesJS.load('particles-js', '../assets/libs/particles/particles_config.json', function () {
		console.log('callback - particles.js config loaded');
	});



	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	$(".top_text").mouseenter(function () {
		$(".top_text").removeClass("h_opacify");
	});
	$(".top_text").mouseleave(function () {
		$(".top_text").addClass("h_opacify");
	});
	$("input,select,textarea").jqBootstrapValidation();

	$(".main_menu a").mPageScroll2id();



});

$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(window).scroll(function () {
	var $sections = $('section');
	$sections.each(function (i, el) {
		var top = $(el).offset().top - 100;
		var bottom = top + $(el).height();
		var scroll = $(window).scrollTop();
		var id = $(el).attr('id');
		if (scroll > top && scroll < bottom) {
			$('a.active').removeClass('active');
			$('a[href="#' + id + '"]').addClass('active');

		}
		

	});
		if ($(window).scrollTop() > $(window).height()) {
            $(".main_menu").addClass("fixed_menu");
												$(".section_wrap").css("margin-top", $(".main_menu").css("height"));
          } else {
            $(".main_menu").removeClass("fixed_menu");
												$(".section_wrap").css("margin-top", "0");
          }
});
