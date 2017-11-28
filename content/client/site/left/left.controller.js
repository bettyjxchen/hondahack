(function () {
    'use strict'

    angular.module('client.site')
        .controller('leftBoxController', LeftBoxController)

    LeftBoxController.$inject = ['$log', 'friendService', '$rootScope', 'uiGmapGoogleMapApi']

    function LeftBoxController($log, friendService, $rootScope, uiGmapGoogleMapApi) {
        let vm = this

        vm.friendsList = null
        vm.addFriend = _addFriend

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
        
    }
})();