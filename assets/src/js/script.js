/*	Author: Fabz
		Kali Mutsa
*/

// --------------------------------------------- //
// DEFINE GLOBAL LIBS                            //
// --------------------------------------------- //

// force compilation of global libs that don't return a value.
require("./helpers/log");
require("./helpers/shims");

var KM = {};

KM.Config = {

	olTop: document.querySelector('.ol-top'),
	olBot: document.querySelector('.ol-bottom'),

	init : function () {

		console.debug('Kali Mutsa');

		// Example module include
		KM.UI = require('./modules/UI');
		KM.UI.init();

		KM.Config.scrollerControl();
	},


	scrollerControl:function () {


		window.onscroll = KM.Config.throttle(500, function() {

				KM.Config.informScroll();

				console.log(KM.Config.olTop, KM.Config.olBot);

				KM.Config.setCss3Style(KM.Config.olTop,'transform','translateY('+window.scrollY+'px) skew(-30deg) rotate(-30deg)');
				KM.Config.setCss3Style(KM.Config.olBot,'transform','translateY('+window.scrollY+'px) skew(-30deg) rotate(-30deg)');

		});
	},


	// Throttle calls to "callback" routine and ensure that it
	// is not invoked any more often than "delay" milliseconds.
	throttle:function(delay, callback) {
		var previousCall = new Date().getTime();
		return function() {
			var time = new Date().getTime();

			// if "delay" milliseconds have expired since
			// the previous call then propagate this call to
			// "callback"
			//
			if ((time - previousCall) >= delay) {
				previousCall = time;
				callback.apply(null, arguments);
			}
		};
	},

	hasClass : function (element, className) {
		return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
	},

	// add a class to an element 
	addClass : function( classname, element ) {
	var cn = element.className;
	//test for existance
	if( cn.indexOf( classname ) != -1 ) {
	    return;
	}
	//add a space if the element already has class
	if( cn != '' ) {
	    classname = ' '+classname;
	}
	element.className = cn+classname;
	},

	// remove a class to an element 
	removeClass : function( classname, element ) {

		var cn = element.className;
		var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
		cn = cn.replace( rxp, '' );
		element.className = cn;
		element.offsetWidth = element.offsetWidth;
	},

	toCamelCase: function (str){
		return str.toLowerCase().replace(/(\-[a-z])/g, function($1){
			return $1.toUpperCase().replace('-','');
		});
	},

	setCss3Style: function (el,prop,val){

		var vendors = ['-moz-','-webkit-','-o-','-ms-','-khtml-',''];

		for(var i=0,l=vendors.length;i<l;i++)
			{
				var p = KM.Config.toCamelCase(vendors[i] + prop);
				if(p in el.style)
					el.style[p] = val;
			}
	},

	createNavigation : function () { 


	},

	informScroll : function () {

		console.log("informScroll");
		console.log(window.pageXOffset);// Alias for the window.scrollX
		console.log(window.pageYOffset );//Alias for the window.scrollY
		console.log(window.scrollX );//Distance from outer edge of browser the viewport scrolled horizontally
		console.log(window.scrollY );//Distance from top of the viewport to the top of the scrollbar. Value will vary as you scroll downward.
	}
};


KM.Config.init();


