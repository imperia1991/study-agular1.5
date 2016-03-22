require('./cross.less');

var config = require('app.config'),
    _ = require('underscore');

crossController.$inject = [ '$stateParams', '$window', 'api' ];
function crossController( $stateParams, $window, api ) {
    var self = this;
	self.options = {
		guid: $stateParams.guid || ''
	};

    api.getCrosses(self.options).then(function(crosses){
        self.cross = crosses.data.response.listings[0];
    });

	self.back = function() {
		$window.history.back();
	};
}

module.exports = crossController;
