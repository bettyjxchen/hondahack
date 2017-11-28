(function () {
    'use strict'

    angular.module('client.site')
        .controller('footerController', FooterController)

    FooterController.$inject = ['$log', '$uibModal']

    function FooterController($log, $uibModal) {
        var vm = this
        vm.$uibModal = $uibModal
        vm.openModal = _openModal


        init()

        function init() {

        }

        function _openModal() {
            var modalInstance = vm.$uibModal.open({
                animation: true,
                templateUrl: 'client/site/footer/modal.html',  
                controller: 'modalController as mc',  
                size: 'lg'
            });
            modalInstance.result.then(function () {                      
            }, function () {
                console.log('Modal dismissed at: ' + new Date());    
            });
        }

      




    }
})()


