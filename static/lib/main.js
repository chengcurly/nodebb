"use strict";

(function() {
	/*
		This file shows how client-side javascript can be included via a plugin.
		If you check `plugin.json`, you'll see that this file is listed under "scripts".
		That array tells NodeBB which files to bundle into the minified javascript
		that is served to the end user.

		Some events you can elect to listen for:

		$(document).ready();			Fired when the DOM is ready
		$(window).on('action:ajaxify.end', function(data) { ... });			"data" contains "url"
	*/

	var siginUrl = 'https://www.dida365.com/signin';

	$(document).ready(function() {

    // $('#logged-out-menu a, div.pull-right a, div.topic-main-buttons a').each(function(){
    //   var target = $(this).attr('href');
    //   if (target == '/login') {
    //     $(this).attr('href', siginUrl);
    //   }
    // });
    
    // $("body").on("click","div.pull-right a", function(){
    //   var target = $(this).attr('href');
    //   if (target == '/login') {
    //     window.location = siginUrl;
    //     return false;
    //   }
    // });
	    
	});

	console.log('nodebb-plugin-dida-forum: loaded');
	// Note how this is shown in the console on the first load of every page
}());
