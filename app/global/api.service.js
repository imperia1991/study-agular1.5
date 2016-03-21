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

	self.getCrosses = function (options) {
		//var deffered = $q.defer();

		return $http({
			url: makeApiGetUrl(options),
			method: "JSONP"
		});

		//return deffered.promise;
	};

	function makeApiGetUrl(options) {
		options.action = options.action || 'search_listings';
		options.encoding = options.encoding || 'json';
		options.country = options.country || 'uk';
		options.page = options.page || '1';
		options.pretty = options.pretty || '1';

		if (options.hasOwnProperty('params') && isArray(options.params)) {
			options.params.callback = options.params.callback || 'JSON_CALLBACK';

			options.params = [options.params.join('&')];
		}

		var result = [];
		for(var key in options){
			result.push(key + '=' + encodeURIComponent(options[key]));
		}

		return 'http://api.nestoria.co.uk/api?' + result.join('&');
	}

}

module.exports = apiService;
