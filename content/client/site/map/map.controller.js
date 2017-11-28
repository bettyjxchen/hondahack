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
            var styleArrays = [
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "hue": "#FFBB00"
                        },
                        {
                            "saturation": 43.400000000000006
                        },
                        {
                            "lightness": 37.599999999999994
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "hue": "#FFC200"
                        },
                        {
                            "saturation": -61.8
                        },
                        {
                            "lightness": 45.599999999999994
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "hue": "#FF0300"
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 51.19999999999999
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "hue": "#FF0300"
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 52
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "hue": "#0078FF"
                        },
                        {
                            "saturation": -13.200000000000003
                        },
                        {
                            "lightness": 2.4000000000000057
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "hue": "#00FF6A"
                        },
                        {
                            "saturation": -1.0989010989011234
                        },
                        {
                            "lightness": 11.200000000000017
                        },
                        {
                            "gamma": 1
                        }
                    ]
                }
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
                    styles: styleArrays
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
                                icon: {
                                    path: google.maps.SymbolPath.CIRCLE,
                                    scale: 5
                                  },
                            }
                        });
                    });
                });
        }

    }
})();