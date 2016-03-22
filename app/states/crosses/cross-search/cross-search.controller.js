"use strict";
var config = require('app.config'),
    _ = require('underscore')/*,
    moment = require('moment')*/;

crossSearchController.$inject = [ '$state', 'store' ];
function crossSearchController( $state, store ) {
    var self = this;

	self.city = store.read('city', '');
	store.write('page', config.PAGE_START);

	self.go = function() {
		var params = {};
		if (self.city) {
			params.city = self.city
		}

		store.write('city', self.city);

		$state.go('crosses.cross-list', params);
	};
}

module.exports = crossSearchController;
