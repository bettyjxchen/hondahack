(function () {
    'use strict'

    angular.module('client.site')
        .controller('leftBoxController', LeftBoxController)

    LeftBoxController.$inject = ['$log', 'friendService', '$rootScope', 'uiGmapGoogleMapApi']

    function LeftBoxController($log, friendService, $rootScope, uiGmapGoogleMapApi) {
        let vm = this

        vm.friendsList = null
        vm.addFriend = _addFriend
        vm.deleteFriend = _deleteFriend
        vm.profileView = false
        vm.profileMode = _profileMode
        vm.add = _add
        vm.profile = {}
        vm.item = {};

        init()
        function init() {
            friendService.readAll()
                .then(response => {
                    $log.log('testfriend')
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

        function _add(friend){
            console.log(vm.item);
            vm.friendsList.push(friend);
        }
    }
})();