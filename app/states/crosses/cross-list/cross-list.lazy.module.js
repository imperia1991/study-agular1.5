
module.exports = angular.module('app.states.crosses.cross-list.lazy', [])
    .controller('CrossListController', require('./cross-list.controller.js'))
	.component('crossItem', {
                                template: require('./cross-item.html'),
                                bindings: {
	                                cross: '<'
                                }
                            });
