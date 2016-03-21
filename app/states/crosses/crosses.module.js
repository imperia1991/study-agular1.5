module.exports = angular.module('app.states.crosses', [
        require('./cross-list/cross-list.module.js').name,
        require('./cross/cross.module.js').name
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('crosses', {
                abstract: true,
                url: "/crosses",
                data: {
                    route: {
                        name: 'crosses',
                        text: "Property Crosses"
                    }
                }
            })
        }
    ]);
