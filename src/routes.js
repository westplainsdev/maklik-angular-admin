module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            template: '<app></app>',
            title: 'maklikAdmin',
            resolve: {
                $title: function () {
                    return 'Home';
                }
            }
        });
}
