var config = require('app.config'),
    _ = require('underscore');

storeService.$inject = [];
function storeService() {
    var self = this;

	self.write = function(name, value) {
		window.sessionStorage[name] = JSON.stringify(value);
	};

	self.read = function(name, defaultValue) {
		if (window.sessionStorage[name]) {
			return JSON.parse(window.sessionStorage[name]);
		}

		return defaultValue;
	}
}

module.exports = storeService;
