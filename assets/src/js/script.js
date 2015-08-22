/*	Author: Fabz
		Kali Mutsa
*/

// --------------------------------------------- //
// DEFINE GLOBAL LIBS                            //
// --------------------------------------------- //
// Uncomment the line below to expose jQuery as a global object to the usual places
// window.jQuery = window.$ = require('../../../node_modules/jquery/dist/jquery.js');


// force compilation of global libs that don't return a value.
require("./helpers/log");
require("./helpers/shims");

//initialise KM object
var KM = {};

KM.Config = {

	init : function () {

		
		console.debug('Kali Mutsa');

		// Example module include
		KM.UI = require('./modules/UI');
		KM.UI.init();
	}
};


KM.Config.init();
