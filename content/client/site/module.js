(function () {
    "use strict";

    angular.module('client.site', ['uiGmapgoogle-maps'])
   
    angular.module('client.site').config(uiGmapGoogleMapApiProviderConfig)

    uiGmapGoogleMapApiProviderConfig.$inject = ['uiGmapGoogleMapApiProvider']

    function uiGmapGoogleMapApiProviderConfig (GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            key: 'AIzaSyDX7riYj5lxzz_eINvXGLPPZQrshCLlBoI',
            v: '3.29',
            libraries: 'visualization'
        })
    }
})();
