"use strict";
var config = require('app.config'),
    _ = require('underscore'),
    moment = require('moment');

crossListController.$inject = [ 'api'];
function crossListController( api ) {
    var self = this;
	self.options = {
		centre_point: '51.684183,-3.431481'
	};

	self.go = function() {
		api.getCrosses(self.options).then(function(crosses){
			self.crosses = crosses;
		}, function(error) {
			debugger;
		});
	};
}

module.exports = crossListController;
