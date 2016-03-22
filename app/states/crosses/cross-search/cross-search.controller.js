"use strict";
var config = require('app.config'),
    _ = require('underscore'),
    moment = require('moment');

crossSearchController.$inject = [ '$state' ];
function crossSearchController( $state ) {
    var self = this;
	self.city = '';

	if (window.sessionStorage['city']) {
		self.city = JSON.parse(window.sessionStorage['city'] || '');
	}

	self.go = function() {
		var params = {};
		if (self.city) {
			params.city = self.city
		}

		window.sessionStorage['city'] = JSON.stringify(self.city);

		$state.go('crosses.cross-list', params);
	};
}

module.exports = crossSearchController;
