"use strict";
var config = require('app.config'),
    _ = require('underscore')
    /*moment = require('moment')*/;

crossListController.$inject = [ '$stateParams', 'api', 'store' ];
function crossListController( $stateParams, api, store ) {
    var self = this;
	self.pageSize = config.PAGE_SIZE;

	self.options = {
		page: config.PAGE_START,
		place_name: $stateParams.city || '',
		number_of_results: self.pageSize
	};

	self.options.page = store.read('page', self.options.page);

	self.getCrosses = function(page) {
		self.options.page = page || self.options.page;

		store.write('page', self.options.page);

		api.getCrosses(self.options).then(function(crosses){
			var response = crosses.data.response;
			self.crosses = response.listings;
			self.page = parseInt(response.page);
			self.total_pages = parseInt(response.total_pages);
		}, function(error) {
			console.log(error);
		});
	};

	self.getCrosses();
}


module.exports = crossListController;
