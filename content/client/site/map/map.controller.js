(function () {
    'use strict'

    angular.module('client.site')
        .controller('mapController', MapControllerFunction)

    MapControllerFunction.$inject = ['uiGmapGoogleMapApi', 'uiGmapIsReady']

    function MapControllerFunction(uiGmapGoogleMapApi, uiGmapIsReady) {
        var vm = this
        vm.markers = []
        vm.results = [
            { "LMD_MP_Latitude": "43.7335624694824", "LMD_MP_Longitude": "-116.400283813477" },
            { "LMD_MP_Latitude": "44.9327393", "LMD_MP_Longitude": "-116.0692291" },
        ]
        vm.map = {
            center: {
                latitude: 43.6376107,
                longitude: -116.314943
            },
            zoom: 10
        }

        uiGmapIsReady.promise()
            .then(function (instances) {
                console.log(instances[0].map);
            })
            .then(function () {
                $scope.results.forEach(function (item, i) {
                    $scope.markers.push({
                        id: Date.now() + i,
                        coords: {
                            latitude: item['LMD_MP_Latitude'],
                            longitude: item['LMD_MP_Longitude']
                        }
                    });
                });
            });


        init()

        function init() {

        }

    }
})();