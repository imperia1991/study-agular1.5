require('./cross-list.less');


module.exports = angular.module('app.routes.crosses.cross-list', [
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('crosses.cross-list', {
                url: '/cross-list/:city',
                views: {
                    'container@': {
                        template: require('./cross-list.html'),
                        controller: 'CrossListController as ctrl'
                    }
                },
                data: {
                    route: {
                        name: 'all-crosses',
                        text: 'All property crosses'
                    }
                },
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var module = require('./cross-list.lazy.module.js');
                        $ocLazyLoad.load({
                            name: module.name
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            })
    }]);