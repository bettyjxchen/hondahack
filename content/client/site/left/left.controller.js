(function () {
    'use strict'

    angular.module('client.site')
        .controller('leftBoxController', LeftBoxController)
        .directive('setModelOnChange', SetModelOnChange)

    SetModelOnChange.$inject = []
    function SetModelOnChange() {
        return {
            require: "ngModel",
            link: function postLink(scope, elem, attrs, ngModel) {
                scope.$on("SMOC.removeImageToUploadDir", (e) => {
                    elem.val(null)
                })
                elem.on("change", (e) => {
                    console.log("on change (from directive)", e);
                    var files = elem[0].files;
                    ngModel.$setViewValue(files)
                })
            }
        }
    }

    LeftBoxController.$inject = ['$log', 'friendService', '$rootScope', 'uiGmapGoogleMapApi', '$uibModal']

    function LeftBoxController($log, friendService, $rootScope, uiGmapGoogleMapApi, $uibModal) {
        let vm = this

        vm.friendsList = null
        vm.hidePlus = false
        vm.addFriend = _addFriend
        vm.deleteFriend = _deleteFriend
        vm.profileView = false
        vm.profileMode = _profileMode
        vm.openModal = _openModal
        vm.add = _add
        vm.profile = {}
        vm.item = {};
        vm.showSuccess = false

        init()
        function init() {
            friendService.readAll()
                .then(response => {
                    $log.log(response)
                    vm.friendsList = response
                })
        }

        function _addFriend(friend) {
            $rootScope.$broadcast('addFriend', friend)
        }

        function _deleteFriend(friend) {
            $rootScope.$broadcast('deleteFriend', friend)

        }

        function _profileMode(friend) {
            console.log(friend)
            vm.profileView = true
            if (friend.name === "kenny") {
                vm.profile = friend,
                    vm.profile.odometer = 33456,
                    vm.profile.range = '30 miles',
                    vm.profile.lockStatus = 'Locked',
                    vm.profile.driveStatus = 'In Drive',
                    vm.profile.panicMode = 'Off'
            }
            else if (friend.name === 'cory') {
                vm.profile = friend,
                    vm.profile.odometer = 60000,
                    vm.profile.range = '50 miles',
                    vm.profile.lockStatus = 'Unlocked',
                    vm.profile.driveStatus = 'Park',
                    vm.profile.panicMode = 'Off'
            }
            else if (friend.name === 'jerry') {
                vm.profile = friend,
                    vm.profile.odometer = 80000,
                    vm.profile.range = '20 miles',
                    vm.profile.lockStatus = 'locked',
                    vm.profile.driveStatus = 'Park',
                    vm.profile.panicMode = 'Off'
            }
        }

        function _add(item) {
            console.log(item);
            vm.hidePlus = false
            vm.friendsList.push(item);
            vm.showSuccess = false
        }


        function _openModal() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/client/site/left/modal/modal.html',
                controller: 'modalController as modalCtrl',
                size: 'md',
            })

            modalInstance.result
                .then(url => {
                    vm.item.profilePic = url
                    vm.showSuccess = true
                })
                .catch(() => $log.log('Modal dismissed at: ' + new Date()))
        }
    }
})();