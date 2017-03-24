define('admin/plugins/dida-forum', ['settings'], function(Settings) {
	'use strict';
	/* globals $, app, socket, require */

	var ACP = {};

	ACP.init = function() {
		Settings.load('dida-forum', $('.dida-forum-settings'));

		$('#save').on('click', function() {
			Settings.save('dida-forum', $('.dida-forum-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'dida-forum-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});