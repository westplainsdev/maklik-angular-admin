module.exports = DashboardController;

/** @ngInject */
function DashboardController($timeout, $log, CoreService) {
    var vm = this;

    vm.classAnimation = 'rubberBand';
    vm.showInfoToastr = showInfoToastr;
    vm.showErrorToastr = showErrorToastr;

    activate();

    function activate() {
        $timeout(function () {
            vm.classAnimation = 'rubberBand';
        }, 400);
    }

    function showInfoToastr(){
         $log.info('Info Toast');
        CoreService.toastInfo('Info', 'This is a Info toast');
    }

    function showErrorToastr() {
        $log.error('Error Toast');
        CoreService.toastError('Error', 'This is a error toast');
    }
}
