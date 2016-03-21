module.exports = angular.module('app.states.crosses.cross', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('crosses.cross', {
                url: '/cross/{id:[0-9]+}',
                views: {
                    'container@': {
                        template: require('./cross.html'),
                        controller: 'CrossController as ctrl'
                    }
                },
                data: {
                    route: {
                        name: 'cross',
                        text: 'Read cross'
                    }
                },
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var module = require('./cross.lazy.module.js');
                        $ocLazyLoad.load({
                            name: module.name
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            })

    }]);
