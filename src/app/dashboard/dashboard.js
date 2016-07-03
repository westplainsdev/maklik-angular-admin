var angular = require('angular');

var route = require('./route');
var controller = require('./controller');
var menu = require('./menu');

var moduleName = 'dashboard';

module.exports = moduleName;

angular
    .module(moduleName, [])
    .config(route)
    .controller('DashboardController', controller)
    .run(menu);


