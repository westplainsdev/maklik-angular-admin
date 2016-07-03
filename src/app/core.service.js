module.exports = function (SweetAlert, toastr) {
    // This functionality was taken from https://github.com/beeman/loopback-angular-admin/issues and modified
    this.alert = function (title, text) {
        SweetAlert.swal(title, text);
    };

    this.alertSuccess = function (title, text) {
        SweetAlert.swal(title, text, 'success');
    };

    this.alertError = function (title, text) {
        SweetAlert.swal(title, text, 'error');
    };

    this.alertWarning = function (title, text) {
        SweetAlert.swal(title, text, 'warning');
    };

    this.alertInfo = function (title, text) {
        SweetAlert.swal(title, text, 'info');
    };

    this.confirm = function (title, text, successCb, cancelCb) {
        var config = {
            title: title,
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55'
        };
        this._swal(config, successCb, cancelCb);
    };

    this._swal = function (config, successCb, cancelCb) {
        SweetAlert.swal(config,
            function (confirmed) {
                if (confirmed) {
                    successCb();
                } else {
                    cancelCb();
                }
            });
    };

    this.toastSuccess = function (title, text) {
        toastr.success(text, title);
    };

    this.toastError = function (title, text) {
        toastr.error(text, title);
    };

    this.toastWarning = function (title, text) {
        toastr.warning(text, title);
    };

    this.toastInfo = function (title, text) {
        toastr.info(text, title);
    };
};
