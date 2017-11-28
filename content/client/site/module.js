(function () {
    "use strict";

    angular.module('client.site', ['uiGmapgoogle-maps'])
   
    angular.module('client.site').config(uiGmapGoogleMapApiProviderConfig)

    uiGmapGoogleMapApiProviderConfig.$inject = ['uiGmapGoogleMapApiProvider']

    function uiGmapGoogleMapApiProviderConfig (GoogleMapApiProviders) {
        GoogleMapApiProviders.config({
            key: 'AIzaSyDV8CE-6bAiubBlN6ZbEkvdVesz21QjNKA',
            v: '3.17'
        })
    }
})();