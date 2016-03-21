
module.exports = angular.module('app.states.crosses.cross-list.lazy', [])
    .controller('CrossListController', require('./cross-list.controller.js'))
    .filter('crosscut', require('./crosscut.filter.js'));
