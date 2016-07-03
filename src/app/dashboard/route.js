module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider) {
    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            controller: 'DashboardController',
            controllerAs: 'dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            resolve: {
                $title: function () {
                    return 'Dashboard';
                }
            }
        });

}
