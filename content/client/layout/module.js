/* global angular */
(function() {
    'use strict'

    angular.module('client.layout', ['ui.router'])

    angular.module('client.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site', {
                url: '/HondAssist',
                views: {
                    root: {
                        templateUrl: 'client/layout/landingpage.html'
                    }
                }
            })
            .state('site.home', {
                url: '/HondAssist/home',
                views: {
                    root: {
                        templateUrl: 'client/layout/layout.tpl.html'
                    }
                }
            })
    }
})();
