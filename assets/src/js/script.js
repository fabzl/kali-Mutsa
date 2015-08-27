/*	Author: Fabz
		Kali Mutsa
*/

// --------------------------------------------- //
// DEFINE GLOBAL LIBS                            //
// --------------------------------------------- //


// force compilation of global libs that don't return a value.
require("./helpers/log");
require("./helpers/shims");

require("./libs/skrollr");
//require("./libs/picturefill");

//initialise KM object
var KM = {};

KM.Config = {

	

	init : function () {

		
		console.debug('Kali Mutsa');

		// Example module include
		KM.UI = require('./modules/UI');
		KM.UI.init();

		KM.Config.informScroll();
	},

	createNavigation : function () { 


	},

	informScroll : function () { 
		
		// console.log("informScroll");
		// console.log(window.pageXOffset);// Alias for the window.scrollX
		// console.log(window.pageYOffset );//Alias for the window.scrollY
		// console.log(window.scrollX );//Distance from outer edge of browser the viewport scrolled horizontally
		// console.log(window.scrollY );//Distance from top of the viewport to the top of the scrollbar. Value will vary as you scroll downward.
	}


};
var  sk = skrollr.init(),

KM.Config.init();





// ;(function() {
//     var throttle = function(type, name, obj) {
//         var obj = obj || window;
//         var running = false;
//         var func = function() {
//             if (running) { return; }
//             running = true;
//             requestAnimationFrame(function() {
//                 obj.dispatchEvent(new CustomEvent(name));
//                 running = false;
//             });
//         };
//         obj.addEventListener(type, func);
//     };

//     /* init - you can init any event */
//     throttle ("scroll", "optimizedScroll");
// })();

// // handle event
// window.addEventListener("optimizedScroll", function() {
//     console.log("Resource conscious scroll callback!");
// });

