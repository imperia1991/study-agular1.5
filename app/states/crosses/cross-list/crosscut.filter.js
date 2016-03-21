crosscutFilter.$inject = [ '$filter' ];
function crosscutFilter($filter) {
    return function (input) {
        return input.length > 5 ? (input.substr(0, 5) + '...'): input;
    }
}
module.exports = crosscutFilter;