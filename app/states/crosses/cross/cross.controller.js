require('./cross.less');

var config = require('app.config'),
    _ = require('underscore');

crossController.$inject = ['$scope', 'api', '$stateParams'];
function crossController($scope, api, $stateParams) {

    var self = this;

    api.getCross($stateParams.id).then(function(cross){
        self.cross = cross;
    })

}

module.exports = crossController;
