(function () {
    "use strict"

    angular.module('client.site')
        .controller('modalController', ModalController);

    ModalController.$inject = ['$uibModalInstance', '$scope']

    function ModalController($uibModalInstance, $scope) {
        var vm = this
        var url = null

        vm.upload = _upload
        vm.cancel = _cancel

        init()

        function init() {

            $scope.$on("fileUpload.urlAvailable", (e, awsUrl) => {
                    $uibModalInstance.close(awsUrl)
                    console.log('here' + awsUrl)
            })

        }

        function _upload() {
            $scope.$broadcast("fileUpload.urlNeeded")
        }

        function _cancel() {
            $uibModalInstance.dismiss('cancel')
        }
    }

})()