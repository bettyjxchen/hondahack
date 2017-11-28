(function(){
    "use strict"
    angular.module('client.site')
            .controller("sideNavController", SideNavController);

SideNavController.inject = ["$scope", "sideNavService"];
function SideNavController($scope, SideNavService){
        var vm = this;
        vm.$scope = $scope;
        vm.sideNavService = SideNavService;
        vm.$onInit = _onInit;
        vm.emergencyMsg = _emergencyMsg;

        vm.getTraffic = _getTraffic;
        vm.getSuccess = _getSuccess;
        vm.getError = _getError;
        vm.airbags= {
            isActive: true,
            isDeployed: false,
            location: "FRONT_LEFT",
            type: "FRONTAL"
            };
        
        
        function _onInit(){
            console.log("page is running ..");
            _getTraffic();
        }

        function _emergencyMsg(){
            console.log("airbags");
            var message = "Emergency message is sending to your close friends";
            if(vm.airbags.isDeployed == true){
                alert (message);
            }
        }

        function _getTraffic(){
            vm.sideNavController.get()
                .then(vm.getSuccess).catch(vm.getError);
        }
        function _getSuccess(res){
            console.log(res);
        }
        function _getError(err){
            console.log(err);
        }
}
})();