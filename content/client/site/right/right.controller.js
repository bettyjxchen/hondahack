(function () {
    'use strict'

    angular.module('client.site')
        .controller('rightBoxController', RightBoxController)
        
    RightBoxController.$inject = ['$log', 'friendService', 'parkingRideService', '$uibModal']

    function RightBoxController($log, friendService, parkingRideService, $uibModal) {
        let vm = this
        
        vm.faqs = null
        vm.friendsList = null
        vm.$uibModal = $uibModal
        vm.openModalOne = _openModalOne

        init()

        function init() {
            getAllParking()
            vm.emergencyMsg = _emergencyMsg;
            vm.fuelMsg = _fuelMsg;
            vm.lostMsg = _lostMsg;
            vm.showParking = _showParking
            vm.clearCalls = _clearCalls
            vm.isParkingShown = MSFIDOCredentialAssertion
            //vm.emergency = _emergency;
            //vm.callFriend = _callFriend;
            vm.toggle = _toggle;
            vm.toggletwo = _toggletwo;
            vm.emergencyActive = false;
            vm.frenCallActive = false;

            vm.airbags = {
                isActive: true,
                isDeployed: false,
                location: "FRONT_LEFT",
                type: "FRONTAL"
            };

            vm.fuel = {
                amountRemaining: 53.2,
                percentRemaining: 0.3,
                range: 40.5
            }

            function _emergencyMsg() {
                vm.airbags.isDeployed = true;
                console.log("airbags");
                var message = "Emergency message is sending to your close friends";
                if (vm.airbags.isDeployed == true) {
                    alert(message);
                    _fuelMsg();
                }
            }

            function _fuelMsg() {
                vm.isActive = true;
            }

            function _lostMsg() {
                vm.isLost = true;
            }
            // function _emergency(){
            //     vm.emergencyActive = true;
            // }
            // function _callFriend(){
            //     vm.frenCallActive = true;
            // }

            function _toggle() {
                vm.isOpen = !vm.isOpen
                if (!vm.isOpen) {
                    vm.isActive = false;
                    vm.isLost = false;
                }
            }

            function _toggletwo() {
                vm.hide = !vm.hide
                if (!vm.isOpen) {
                    vm.emergencyActive = false;
                    vm.frenCallActive = false;
                }
            }

        }

        function getAllParking() {
            parkingRideService.readAll()
                .then(data => console.log(data));

        }

        function _showParking () {
            vm.isParkingShown = true
        }

        function _clearCalls() {
            vm.emergencyActive = false
            vm.frenCallActive = false
        }

        function _openModalOne() {
            var modalInstance = vm.$uibModal.open({
                animation: true,
                templateUrl: 'client/site/footer/modal-phone.html',  
                controller: 'modalController as mc', 
                size: 'lg'
            });

            modalInstance.result.then(function () {                   
            }, function () {
                console.log('Modal dismissed at: ' + new Date());     
            });
        }
        


    }
})();
