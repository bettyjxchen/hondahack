(function () {
    "use strict";

    angular.module('client.site')
        .controller('modalController', ModalController);


    ModalController.$inject = ['$uibModalInstance']

    function ModalController($uibModalInstance) {

        var vm = this;

        vm.$uibModalInstance = $uibModalInstance;


    }
})();