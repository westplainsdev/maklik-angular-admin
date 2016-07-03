var angular = require('angular');
require('angular-animate');
require('angular-cookies');
require('angular-touch');
require('angular-sanitize');
require('angular-messages');
require('angular-aria');
require('angular-resource');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-schema-form');
require('angular-sweetalert');
require('angular-ui-router-title');

var App = require('./app/containers/App');
var Header = require('./app/components/header');
var Sidebar = require('./app/components/sidebar');
var Footer = require('./app/components/footer');
var Menu = require('./app/components/menu');
var CoreService = require('./app/core.service.js');
var Dashboard = require('./app/dashboard/dashboard');

var routesConfig = require('./routes');
var appConfig = require('./config');


require('bootstrap-loader');
require("../node_modules/bootstrap-admin-ui/sass/main.scss");
require("../node_modules/bootstrap-admin-ui/sass/content.scss");
require("../node_modules/bootstrap-admin-ui/sass/hamburg.scss");
require("../node_modules/bootstrap-admin-ui/sass/header.scss");
require("../node_modules/bootstrap-admin-ui/sass/sidebar.scss");
require("../node_modules/bootstrap-admin-ui/sass/variables.scss");
require('./index.scss');
require('../node_modules/font-awesome/css/font-awesome.min.css');
require('../node_modules/angular-toastr/dist/angular-toastr.css');
require('../node_modules/angular-toastr/dist/angular-toastr.tpls.js');

var modules  = [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ui.router.title',
    'ui.bootstrap',
    'toastr',
    'oitozero.ngSweetAlert',
    'schemaForm',
    Dashboard
];

angular
  .module('app', modules)
    .config(routesConfig)
    .config(appConfig)
    .service('menu', Menu)
    .service('CoreService', CoreService)
    .directive('app', App)
    .directive('footer', Footer)
    .directive('sidebar', Sidebar)
    .directive('header', Header)
    .run(function ($log) {
        $log.debug('log works');
    });