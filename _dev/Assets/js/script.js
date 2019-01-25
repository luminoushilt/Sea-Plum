jQuery.noConflict();
var seaPlum = (function($) {

	// Toggles Mobile Menu
	function mobileMenu() {
		var $menuToggle = $('.mobile-nav-toggle');
		var $menu = $('.navbar');
		var $site = $('header');

		$menuToggle.on('click', function() {
			$(this).toggleClass('is-open');
			$menu.toggleClass('nav-open');
			$site.toggleClass('menu-open');
		});
	}

	function backToTop() {
		var $page = $('html, body');
		var $back2top = $('.back-to-top');
		var duration = 300;

		$back2top.click(function (jump) {
			$page.animate({scrollTop: 0},
				duration);
			jump.preventDefault();
		});

		$(window).scroll( function () {
			var $self = $(this),
				height = 0,
				top = $self.scrollTop();

			console.log(top);

			if (top > height) {
				if (!$back2top.is(':visible')) {
					$back2top.fadeIn(duration);
					}
				} else {
					$back2top.hide();
				}

			});
	}

	// Auto scrolling
	function smoothScroll() {
		var anchorTags = $('a[href*=#]:not([href=#])');
		var duration = 300;

		anchorTags.on('click', function() {
			if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				var page = $('html, body');

				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if(target.length) {
					page.animate({
						scrollTop: target.offset().top
					}, duration);
					return false;
				}
			}
		});
	}

	$(document).ready(function() {
		mobileMenu();
		backToTop();
		smoothScroll();
	});

})(jQuery);