/*
 * nodeunit_suite.js
 * Unit test suite for SPA
 *
 * Please run using /nodeunit <this_file>/
*/

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa */

// third party modules and globals
global.jQuery = require( 'jquery' );
global.TAFFY  = require( '../js/jq/taffydb-2.6.2.js' );
global.$      = global.jQuery;
require( '../js/jq/jquery.event.gevent-0.1.9.js' );

//our modules and globals
global.spa = null;
require( '../js/spa.js' );
require( '../js/spa.utils.js' );
require( '../js/spa.fake.js' );
require( '../js/spa.data.js' );
require( '../js/spa.model.js' );

