jQuery(document).ready(function($){
	//open/close mega-navigation
	// $('.cd-dropdown-trigger').on('click', function(event){
	// 	event.preventDefault();
	// 	toggleNav();
	// });

	//close meganavigation
	// $('.cd-dropdown .cd-close').on('click', function(event){
	// 	event.preventDefault();
	// 	toggleNav();
	// });

	//on mobile - open submenu
	$('.hasChildren').children('a').on('click', function(event){
		//prevent default clicking on direct children of .dropdownContent
		event.preventDefault();
		var selected = $(this);
		selected.next('ul').removeClass('isHidden').end().parent('.hasChildren').parent('ul').addClass('move-out');
	});

	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
	$('.dropdownContent').menuAim({
        activate: function(row) {
        	$(row).children().addClass('is-active').removeClass('fade-out');
        	if( $('.dropdownContent .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
        	$(row).children().removeClass('is-active');
        	if( $('li.hasChildren:hover').length == 0 || $('li.hasChildren:hover').is($(row)) ) {
        		$('.dropdownContent').find('.fade-in').removeClass('fade-in');
        		$(row).children('ul').addClass('fade-out')
        	}
        },
        exitMenu: function() {
        	$('.dropdownContent').find('.is-active').removeClass('is-active');
        	return true;
        },
        submenuDirection: submenuDirection,
    });

	//submenu items - go back link
	$('.go-back').on('click', function(){
		var selected = $(this),
			visibleNav = $(this).parent('ul').parent('.hasChildren').parent('ul');
		selected.parent('ul').addClass('isHidden').parent('.hasChildren').parent('ul').removeClass('move-out');
	});

	function toggleNav(){
		var navIsVisible = ( !$('.dropdown').hasClass('open') ) ? true : false;
		$('.dropdown').toggleClass('open', navIsVisible);
		$('.cd-dropdown-trigger').toggleClass('open', navIsVisible);
		if( !navIsVisible ) {
			$('.dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.hasChildren ul').addClass('isHidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});
		}
	}

	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}
});
