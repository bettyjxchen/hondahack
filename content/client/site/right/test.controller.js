(function(){
    "use strict"
    angular.module('client.site')
            .controller("sideNavController", SideNavController);

SideNavController.inject = ["$scope"];
function SideNavController($scope){
        var vm = this;
        vm.$scope = $scope;
        vm.$onInit = _onInit;
        vm.emergencyMsg = _emergencyMsg;

        vm.airbags= {
            isActive: true,
            isDeployed: false,
            location: "FRONT_LEFT",
            type: "FRONTAL"
            };
        
        
        function _onInit(){
            console.log("page is running ..");
        }

        function _emergencyMsg(){
            vm.airbags.isDeployed = true;
            console.log("airbags");
            var message = "Emergency message is sending to your close friends";
            if(vm.airbags.isDeployed == true){
                alert (message);
            }
        }

}
})();