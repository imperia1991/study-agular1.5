module.exports = angular.module('app.states.crosses.cross.lazy', [])
    .controller('CrossController', require('./cross.controller.js'))
	.component('crossDetail', {
		           template: require('./cross-detail.html'),
		           bindings: {
			           cross: '<'
		           }
	           });

