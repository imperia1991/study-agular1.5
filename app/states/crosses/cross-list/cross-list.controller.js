"use strict";
var config = require('app.config'),
    _ = require('underscore'),
    moment = require('moment');

crossListController.$inject = [ 'api'];
function crossListController( api ) {

    var self = this;

    api.getCrosses().then(function(crosses){
	    debugger;
        self.crosses = crosses;
    })

}

module.exports = crossListController;
