var config = require('app.config'),
    _ = require('underscore');

apiService.$inject = ['$http', '$q', '$timeout'];
function apiService($http, $q, $timeout) {
    var self = this;


    self.fake = function(stub){
        var deffered = $q.defer();

        $timeout(function(){
            deffered.resolve(stub)
        }, 500);

        return deffered.promise;
    };

    var articles = [
        { id: 1, title: 'Article 1', text: 'Article 1 text' },
        { id: 2, title: 'Article 2', text: 'Article 2 text' },
        { id: 3, title: 'Article 3', text: 'Article 3 text' }
    ];


    self.getArticles = function(){
        return self.fake(articles)
    }

    self.getArticle = function(id){
        var article = _.find(articles, function(article){ return article.id == id })
        return self.fake(article);
    }

    self.search = function(query, operator){

        var result;

        if( !query || query.trim().length == 0 ){
            result = articles;
        } else {
            var words = query.replace(/\s+/g, ' ').trim().split(' ');
            result = _.filter(articles, function(article){

                var foundWords = _.filter(words, function(word){
                    return article.text.indexOf(word) != -1;
                });

                return foundWords.length == words.length && operator == 'and' || foundWords.length != 0 && operator == 'or';
            })

        }

        return self.fake(result);
    };

	self.getCrosses = function () {
		var deffered = $q.defer();

		var data = $http({
			                 url: "http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=51.684183,-3.431481",
			                 method: "JSONP"
		                 });

		return deffered.promise;
	}

}

module.exports = apiService;
