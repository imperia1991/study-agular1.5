"use strict";
var config = require('app.config'),
    _ = require('underscore'),
    moment = require('moment');

crossListController.$inject = [ '$scope', 'api'];
function crossListController( $scope, api ) {
    var self = this;
	$scope.options = {
		centre_point: '51.684183,-3.431481'
	};

	$scope.go = function() {
		api.getCrosses($scope.options).then(function(crosses){
			self.crosses = crosses;
		}, function(error) {
			debugger;
		});
	};
}

module.exports = crossListController;
