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
        vm.profile = {}

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
            debugger
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
        }

    }
})();