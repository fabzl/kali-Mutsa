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

	windowHeight: window.innerHeight,
	documentHeight: document.documentElement.scrollHeight,
	container: document.querySelector('.container'),

	olTop: document.querySelector('.ol-top'),
	olBot: document.querySelector('.ol-bottom'),

	// isIE : (navigator.userAgent.indexOf("MSIE") != -1);


	init : function () {

		console.debug('Kali Mutsa');

		// Example module include
		KM.UI = require('./modules/UI');
		KM.UI.init();

		// if (KM.Config.isIE) {
			KM.Config.defineOverlayers();
			KM.Config.scrollerControl();

		// }else{ 

		// 	KM.Config.alphaOverlayers();
		// }
	},

	defineOverlayers : function () {

			var olHeight = KM.Config.windowHeight;

			KM.Config.olTop.style.height = olHeight+"px";
			KM.Config.olBot.style.height = olHeight+"px";
			KM.Config.olTop.alternate = false;
			KM.Config.olTop.alternate = true;
	},

	scrollerControl:function () {

		window.onscroll = KM.Config.throttle(2000, function() {

				var olPosTop = KM.Config.determineOlPosY(KM.Config.olTop);

				var olPosBot = KM.Config.determineOlPosY(KM.Config.olBot);

				KM.Config.setCss3Style(KM.Config.olTop,'transform','translateY('+olPosTop+'px) skew(-30deg) rotate(-30deg)');
				KM.Config.setCss3Style(KM.Config.olBot,'transform','translateY('+olPosBot+'px) skew(-30deg) rotate(-30deg)');
		});
	},

	determineOlPosY: function (obj) {

		var posY ;
		if (obj.alternate === true ) { 
			posY = KM.Config.windowHeight+KM.Config.windowHeight*.6;
			obj.alternate = false;
		}else{
			posY = -(KM.Config.windowHeight*1.3);
			obj.alternate = true;
		}
		return posY;
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

	informScroll : function () {

		console.log("informScroll");
		console.log(window.pageXOffset);// Alias for the window.scrollX
		console.log(window.pageYOffset );//Alias for the window.scrollY
		console.log(window.scrollX );//Distance from outer edge of browser the viewport scrolled horizontally
		console.log(window.scrollY );//Distance from top of the viewport to the top of the scrollbar. Value will vary as you scroll downward.
	}
};


KM.Config.init();


