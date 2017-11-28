/* global angular */
(function() {
    'use strict'

    angular.module('client.layout', ['ui.router'])

    angular.module('client.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site', {
                url: '/',
                views: {
                    root: {
                        templateUrl: 'client/layout/layout.tpl.html'
                    }
                }
            })
            .state('landing', {
                url: '/go',
                views: {
                    root: {
                        templateUrl: 'client/layout/landingpage.html'
                    }
                }
            })
    }
})();
