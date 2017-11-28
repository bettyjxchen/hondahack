(function () {
    'use strict'

    angular.module('client.services')
        .factory('parkingRideService', ParkingRideServiceFactory)

    ParkingRideServiceFactory.$inject = ['$http', '$q']

    function ParkingRideServiceFactory($http, $q) {
        return {
            readAll: readAll,
            readById: readById,
            create: create,
            update: update,
            delete: _delete
        }

        function readAll() {
            var parkingArray = [
                {
                    Spaces: 288,
                    Latitude: 34.190745,
                    CityName: "Los Angeles",
                    ID: 2184,
                    Longitude: -118.597344,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "6770 Canoga Ave"
                },
                {
                    Spaces: 816,
                    Latitude: 34.253401,
                    CityName: "Los Angeles",
                    ID: 2186,
                    Longitude: -118.598868,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "10046 Old Depot Plaza Rd"
                },
                {
                    Spaces: 117,
                    Latitude: 34.264389,
                    CityName: "Los Angeles",
                    ID: 2187,
                    Longitude: -118.47081,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "15550 Chatsworth St"
                },
                {
                    Spaces: 261,
                    Latitude: 34.05349,
                    CityName: "Los Angeles",
                    ID: 2188,
                    Longitude: -118.245323,
                    CostDescription: "Free + Reserved",
                    CountyName: "Los Angeles",
                    Location: "6338 and 6340 N Balboa Blvd"
                },
                {
                    Spaces: 120,
                    Latitude: 34.164904,
                    CityName: "Los Angeles",
                    ID: 2189,
                    Longitude: -118.491748,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "5100 Hayvenhurst Ave"
                },
                {
                    Spaces: 115,
                    Latitude: 34.264572,
                    CityName: "Los Angeles",
                    ID: 2191,
                    Longitude: -118.480102,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "15950 Chatsworth St"
                },
                {
                    Spaces: 145,
                    Latitude: 34.110444,
                    CityName: "Los Angeles",
                    ID: 2192,
                    Longitude: -118.193212,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "151 N Ave 57"
                },
                {
                    Spaces: 94,
                    Latitude: 34.08059,
                    CityName: "Los Angeles",
                    ID: 2193,
                    Longitude: -118.219318,
                    CostDescription: "Free + Reserved",
                    CountyName: "Los Angeles",
                    Location: "370 W Avenue 26"
                },
                {
                    Spaces: 63,
                    Latitude: 33.944732,
                    CityName: "Los Angeles",
                    ID: 2194,
                    Longitude: -118.243286,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "10100 Grandee Ave"
                },
                {
                    Spaces: 980,
                    Latitude: 33.869597,
                    CityName: "Los Angeles",
                    ID: 2195,
                    Longitude: -118.28633,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "731 W 182nd St"
                },
                {
                    Spaces: 96,
                    Latitude: 33.927854,
                    CityName: "Los Angeles",
                    ID: 2196,
                    Longitude: -118.265358,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "I-105 and S Avalon Blvd"
                },
                {
                    Spaces: 390,
                    Latitude: 33.929943,
                    CityName: "Los Angeles",
                    ID: 2197,
                    Longitude: -118.378331,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "11500 Aviation Blvd"
                },
                {
                    Spaces: 115,
                    Latitude: 33.97431,
                    CityName: "Los Angeles",
                    ID: 2198,
                    Longitude: -118.242955,
                    CostDescription: "Free + Reserved",
                    CountyName: "Los Angeles",
                    Location: "7225 Graham Ave"
                },
                {
                    Spaces: 253,
                    Latitude: 33.927942,
                    CityName: "Los Angeles",
                    ID: 2199,
                    Longitude: -118.282564,
                    CostDescription: "Free",
                    CountyName: "Los Angeles",
                    Location: "11500 S Figueroa St"
                }
            ]
            return $q.resolve(parkingArray)
                .catch(onError)
            debugger
        }

        function readById(id) {
            return $http.get(`/api/hackers/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function create(hackerData) {
            return $http.post('/api/hackers', hackerData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function update(hackerData) {
            return $http.put(`/api/hackers/${hackerData._id}`, hackerData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function _delete(id) {
            return $http.delete(`/api/hackers/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(response) {
            return response.data
        }

        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }
})()
