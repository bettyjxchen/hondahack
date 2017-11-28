(function () {
    'use strict'

    angular.module('client.site')
        .controller('leftBoxController', LeftBoxController)
    LeftBoxController.$inject = ['$log', 'friendService']

    function LeftBoxController($log, friendService) {
        let vm = this

        vm.friendsList = null

        init()
        function init() {
            friendService.readAll().then(response=> {$log.log(response); vm.friendsList = response})
        }
        $log.log(vm.friendsList)
    }
})();