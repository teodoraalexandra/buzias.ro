(function () {
 "use strict";
	jQuery(document).ready(function(){
		
		
		//Add Class Js to html
		jQuery('html').addClass('js');
		
		//=================================== MENU ===================================//
		jQuery("ul.sf-menu").superfish({
					//add options here if required
				});
						 
		
		//=================================== MOBILE MENU DROPDOWN ===================================//
		jQuery('#topnav').tinyNav({
			active: 'current'
		});	
		
		
		//=================================== BACK TO TOP ===================================//
		
		// hide #scroll-to-top first
		jQuery("#scroll-to-top").hide();
	
		// fade in #back-top
		jQuery(function () {
			jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > 300) {
					jQuery('#scroll-to-top').fadeIn();
				} else {
					jQuery('#scroll-to-top').fadeOut();
				}
			});
	
			// scroll body to 0px on click
			jQuery('#scroll-to-top').click(function () {
				jQuery('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});
	
	});

})(jQuery);