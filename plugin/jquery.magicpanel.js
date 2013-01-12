/*
 * jQuery Magic Panel v1.1
 * https://github.com/sershp32/magicpanel-js
 *
 * Copyright 2012, Serge Shpak
 * http://twitter.com/sergz
 */
(function($){  
	$.fn.magicPanel = function(options) {
		options = $.extend({  
			minWidth: 970  
		}, options); 
		
		$(document).ready(function() {
			var width = Math.ceil(($(window).width() - options.minWidth) / 2);
			$(".b-magicpanel").css("width", width + "px");
			
			$(window).scroll(function() {
				var scrollTrigger = Math.ceil($(document).height() * 0.1);
				if ($(window).width() >= (options.minWidth + 210)) {
					if ($(window).scrollTop() > scrollTrigger) {
						$(".b-magicpanel").fadeIn(300);
					} else {
						$(".b-magicpanel").fadeOut(300);
					}
				} else {
					$(".b-magicpanel").fadeOut(300);
				}
			});
			$(window).resize(function() {
				width = Math.ceil(($(window).width() - options.minWidth) / 2);
				$(".b-magicpanel").css("width", width + "px");
				if ($(window).width() < (options.minWidth + 210)) {
					$(".b-magicpanel").fadeOut(300);
				} else {
					$(".b-magicpanel").fadeIn(300);
				}
			});
			$(".b-magicpanel").live("mouseover", function() {
				$(".b-magicpanel__side").animate({opacity:0.1}, 150);
				$(".b-magicpanel__arrow").animate({opacity:0.5}, 150);				
			});
			$(".b-magicpanel").live("mouseleave", function() {
				$(".b-magicpanel__side").animate({opacity:0.0}, 100);
				$(".b-magicpanel__arrow").animate({opacity:0}, 100);				
			});
			$(".b-magicpanel").live("click",function() {
				$(".b-magicpanel").fadeOut(0);
				$(window).scrollTop(0);
			});
		});
		
		return this.each(function() {
			var self = $(this);
			self.append("<div class='b-magicpanel'><div class='b-magicpanel__side'></div><div class='b-magicpanel__arrow'></div></div>");
		});
	};
})(jQuery);