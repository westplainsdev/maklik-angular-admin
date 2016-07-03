module.exports = function () {
    return {
        templateUrl: 'app/containers/App.html',
        controller: App,
        controllerAs: 'app'
    }
};

function App($scope) {
    var vm = this;
    vm.name = 'maklikAdmin';
    vm.version = '0.0.1';

    vm.navigation = {
        header: 'NAVIGATION'
    };

    vm.footer = {
        link: {
            text: 'Github',
            location: 'https://pharamltx.com'
        }
    };
}
