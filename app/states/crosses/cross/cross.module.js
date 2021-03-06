module.exports = angular.module('app.states.crosses.cross', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('crosses.cross', {
                url: '/cross/:guid',
                views: {
                    'container@': {
                        template: require('./cross.html'),
                        controller: 'CrossController as ctrl'
                    }
                },
                data: {
                    route: {
                        name: 'cross',
                        text: 'Property Details'
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
