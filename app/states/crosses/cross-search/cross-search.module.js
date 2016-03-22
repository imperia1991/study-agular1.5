require('./cross-search.less');


module.exports = angular.module('app.routes.crosses.cross-search', [
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('crosses.cross-search', {
			    url: '',
			    views: {
			        'container@': {
			            template: require('./../cross-search/cross-search.html'),
			            controller: 'CrossSearchController as ctrl'
			        }
			    },
			    data: {
			        route: {
			            name: 'search-crosses',
			            text: 'Search property crosses'
			        }
			    },
				resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
				   var deferred = $q.defer();

				   require.ensure([], function (require) {
				       var module = require('./cross-search.lazy.module.js');
				       $ocLazyLoad.load({
				                            name: module.name
				                        });
				       deferred.resolve(module);
				   });

				   return deferred.promise;
				}]
			})
    }]);