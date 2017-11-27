/* global angular */
(function() {
    'use strict'
    angular.module('client.crud')
    angular.module('client.crud').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.right-nav.index', {
                url: '/right-side',
                abstract: true,
                views: {
                    'content': {
                        templateUrl: '/content/client/crud/right-nav-bar/right-nav-bar-default.html',
                        controller: ''
                    }
                }
            })
            .state('site.right-nav.index', {
                url: '/nav-bar',
                views: {
                    'right-nav': {
                        templateUrl: '/content/client/crud/right-nav-bar/right-nav-bar.html',
                        controller: ''
                    }
                },
            })
    }

})();
