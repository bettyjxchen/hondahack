(function () {
    "use strict";

    angular.module('client.site')
        .controller('sideNavController', SideNavControllerFunction)

    SideNavControllerFunction.$inject = ['$log']

    function SideNavControllerFunction($log) {
        var vm = this;
        vm.emergencyMsg = _emergencyMsg;
        vm.sendMsg = _sendMsg;
        vm.airbags = {
            isActive: true,
            isDeployed: false,
            location: "FRONT_LEFT",
            type: "FRONTAL"
        };

        function _emergencyMsg() {
            vm.airbags.isDeployed = true;
            console.log("airbags");
            var message = "Emergency message is sending to your close friends";
            if (vm.airbags.isDeployed == true) {
                alert(message);
                _sendMsg();
            }
        }

        function _sendMsg(){
            vm.isActive = true;
        }
    }
})();