'use strict';

var debugEnabled = [
        'localhost',
        'app.local'
    ].indexOf(location.hostname) > -1;

var configProp = {
    LOG_FLAG: debugEnabled,
    COMPILE_FLAG: debugEnabled,
    API_CONTEXT: '/api',
    XHR_TIMEOUT: 60000,
	PAGE_SIZE: 6,
	PAGE_START: 1
};


module.exports = configProp;

