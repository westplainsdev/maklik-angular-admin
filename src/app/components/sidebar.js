module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/sidebar.html',
        controller: SidebarController,
        controllerAs: 'sidebar'
    }
};

function SidebarController($scope, $cookies, $window, menu) {
    var vm = this;
    var mobileView = 992;

    vm.menu = menu.getMenu();
    
    vm.toggle = determineToggle(getWidth());

    vm.toggleSidebar = toggleSidebar;

    $scope.$watch(getWidth, function (newValue) {
        vm.toggle = determineToggle(newValue);
    });

    function getWidth() {
        return $window.innerWidth;
    }

    function toggleSidebar() {
        vm.toggle = !vm.toggle;
        $cookies.put('toggle', vm.toggle);
    }

    function determineToggle(newValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookies.get('toggle'))) {
                return $cookies.get('toggle');
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}
