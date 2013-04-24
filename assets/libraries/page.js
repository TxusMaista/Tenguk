var Page = (function() {

	var $container = $( '#ext' ),
		$bookBlock = $( '#extendidas' ),
		$items = $bookBlock.children(),
		itemsCount = $items.length,
		current = 0,
		bb = $( '#extendidas' ).bookblock( {
			speed : 800,
			perspective : 2000,
			shadowSides	: 0.8,
			shadowFlip	: 0.4,
			onEndFlip : function(old, page, isLimit) {

				current = page;
				// update TOC current
				updateTOC();
				// updateNavigation
				updateNavigation( isLimit );
				// initialize jScrollPane on the content div for the new item
				//setJSP( 'init' );
				// destroy jScrollPane on the content div for the old item
				//setJSP( 'destroy', old );

			}
		} ),
		$navNext = $( '#bb-nav-next' ),
		// $navPrev = $( '#bb-nav-prev' ).hide(),
		$navPrev = $( '#bb-nav-prev' ).css("color", "black"),
		$menuItems = $container.find( 'ul.menu-toc > li' ),
		$tblcontents = $( '#tblcontents' ),
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		supportTransitions = Modernizr.csstransitions;

	console.log("variables globales iniciado");

	function init() {

		// initialize jScrollPane on the content div of the first item
		//setJSP( 'init' );
		console.log("ninit");
		initEvents();

	}

	function initEvents() {

		// add navigation events
		$navNext.on( 'click', function() {
			bb.next();
			return false;
		} );

		$navPrev.on( 'click', function() {
			bb.prev();
			return false;
		} );

		// add swipe events
		$items.on( {
			'swipeleft'		: function( event ) {
				if( $container.data( 'opened' ) ) {
					return false;
				}
				bb.next();
				return false;
			},
			'swiperight'	: function( event ) {
				if( $container.data( 'opened' ) ) {
					return false;
				}
				bb.prev();
				return false;
			}
		} );

		// show table of contents
		$tblcontents.on( 'click', toggleTOC );

		// click a menu item
		$menuItems.on( 'click', function() {

			console.log("clikado en articulo");
			var $el = $( this ),
				idx = $el.index(),
				jump = function() {
					bb.jump( idx + 1 );
				};
			console.log($el);
			console.log(idx);

			current !== idx ? closeTOC( jump ) : closeTOC();

			return false;

		} );

	}

	function salta(n) {
		bb.jump( n );
		return false;
	}


	function updateTOC() {
		$menuItems.removeClass( 'menu-toc-current' ).eq( current ).addClass( 'menu-toc-current' );
	}

	function updateNavigation( isLastPage ) {

		if( current === 0 ) {
			// $navNext.show();
			// $navPrev.hide();
			$navNext.css("color", "white");
			$navPrev.css("color", "black");
		}
		else if( isLastPage ) {
			// $navNext.hide();
			// $navPrev.show();
			$navNext.css("color", "black");
			$navPrev.css("color", "white");
		}
		else {
			// $navNext.show();
			// $navPrev.show();
			$navNext.css("color", "white");
			$navPrev.css("color", "white");
		}

	}

	function toggleTOC() {
		var opened = $container.data( 'opened' );
		opened ? closeTOC() : openTOC();
	}

	function openTOC() {
		$navNext.hide();
		$navPrev.hide();
		$container.addClass( 'slideRight' ).data( 'opened', true );
	}

	function closeTOC( callback ) {

		updateNavigation( current === itemsCount - 1 );
		$container.removeClass( 'slideRight' ).data( 'opened', false );
		if( callback ) {
			if( supportTransitions ) {
				$container.on( transEndEventName, function() {
					$( this ).off( transEndEventName );
					callback.call();
				} );
			}
			else {
				callback.call();
			}
		}

	}

	return { init : init,
			salta: salta };

})();