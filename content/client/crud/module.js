/* global angular */
(function() {
    'use strict'
    angular.module('client.crud', ['ui-router'])
    angular.module('client.crud').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.blogCat', {
                url: '/side-bar',
                abstract: true,
                views: {
                    'content': {
                        templateUrl: '/client/crud/blog-categories/blogCat-entity.html',
                        controller: 'blogCatEntityController as bLCtrl'
                    }
                }
            })
            .state('site.blogCat.list', {
                url: '/right-nav',
                views: {
                    'right-nav': {
                        templateUrl: '/client/crud/'
                    }
                },
                resolve: {
                    blogs: getAllBlogs
                }
            })
    }
})();
