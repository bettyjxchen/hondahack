(function () {
    'use strict'
    angular.module('client.crud')
        .controller('friendsListController', FriendsListController)
    
    FriendsListController.$inject =['$log']

    function FriendsListController($log){
        let vm = this
        vm.tagline = null

        init() 
        function init() {
            vm.tagline = 'heh'
        }
    }
})()