'use strict';

module.exports = angular.module('app.states', [
        require('./crosses/crosses.module.js').name,
        require('./news/news.module.js').name,
        require('./search/search.module.js').name,
        require('./home/home.module.js').name
    ]);
