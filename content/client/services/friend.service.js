(function () {
    'use strict'

    angular.module('client.services')
        .factory('friendService', FriendServiceFactory)
        FriendServiceFactory.$inject = ['$http', '$q']
        
            function FriendServiceFactory($http, $q) {
                return {
                    readAll: readAll,
                    readById: readById,
                    create: create,
                    update: update,
                    delete: _delete
                }
        
                function readAll() {
                   let friendsArray = [
                        { 
                        name: "kenny", 
                        profilePic: "https://www.shareicon.net/data/128x128/2015/11/12/163575_man_256x256.png" },
                        { 
                        name: "cory", 
                        profilePic: "https://blzgdapipro-a.akamaihd.net/game/unlocks/0x02500000000008E8.png" }
                    ]

                    return $q.resolve(friendsArray)
                    .then(xhrSuccess)
                    .catch(onError)
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
                    return response
                }
        
                function onError(error) {
                    console.log(error.data)
                    return $q.reject(error.data)
                }
            }
})()