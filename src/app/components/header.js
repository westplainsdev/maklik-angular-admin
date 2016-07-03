module.exports = function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/header.html',
        controller: HeaderbarController,
        controllerAs: 'headerbar'
    }
};

function HeaderbarController() {
    var vm = this;

    vm.toggleDropdown = toggleDropdown;

    vm.items = {
        name: 'Joe Bloggs!',
        options: ['Profile', 'Menu Item 2', 'Menu Item 3']
    };

    vm.status = {
        isopen: false
    };

    function toggleDropdown() {
        console.log('fff');
        vm.status.isopen = !vm.status.isopen;
    }

}

