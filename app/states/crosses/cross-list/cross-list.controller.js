"use strict";
var config = require('app.config'),
    _ = require('underscore')
    /*moment = require('moment')*/;

crossListController.$inject = [ '$stateParams', 'api'];
function crossListController( $stateParams, api ) {
    var self = this;
	self.options = {
		place_name: $stateParams.city || ''
	};

	api.getCrosses(self.options).then(function(crosses){
		self.crosses = crosses.data.response.listings;
	}, function(error) {
		console.log(error);
	});
}


module.exports = crossListController;
