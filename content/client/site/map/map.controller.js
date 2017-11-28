(function () {
    'use strict'

    angular.module('client.site')
        .controller('mapController', MapControllerFunction)

    MapControllerFunction.$inject = ['uiGmapGoogleMapApi', 'uiGmapIsReady']

    function MapControllerFunction(uiGmapGoogleMapApi, uiGmapIsReady) {
        var vm = this
        vm.markers = []
        vm.map = {}
        vm.results = []

        init()

        function init() {
            vm.results = [
                { "LMD_MP_Latitude": "34.0413606", "LMD_MP_Longitude": "-118.2697771", "name": "terry" },
                { "LMD_MP_Latitude": "34.0224", "LMD_MP_Longitude": "-118.2851", "name": "pam" },
                { "LMD_MP_Latitude": "34.0718", "LMD_MP_Longitude": "-118.3608", "name": "sisi" },
                { "LMD_MP_Latitude": "34.0839", "LMD_MP_Longitude": "-118.2000", "name": "lou" },
            ]

            vm.map = {
                center: {
                    latitude: 34.0413606,
                    longitude: -118.2697771
                },
                zoom: 12,
                options: {
                    scrollwheel: false,
                    streetViewControl: false,
                    draggable: true,
                }
            }

            uiGmapIsReady.promise()
                .then(instances => {
                    console.log(instances[0].map);
                })
                .then(() => {
                    vm.results.forEach(function (item, i) {
                        vm.markers.push({
                            id: Date.now() + i,
                            coords: {
                                latitude: item['LMD_MP_Latitude'],
                                longitude: item['LMD_MP_Longitude']
                            },
                            name: item['name'],
                            options: {
                                labelClass: 'marker_labels',
                                labelAnchor: '12 60',
                                labelContent: item.name,
                                icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                               
                            }
                        });
                    });
                });
        }

    }
})();