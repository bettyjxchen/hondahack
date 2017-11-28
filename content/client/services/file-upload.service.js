(function () {
    'use strict'

    angular.module('client.services')
        .factory('filesService', FilesServiceFactory)

        FilesServiceFactory.$inject = ['$http', '$q']

    function FilesServiceFactory($http, $q) {
        return {
            getSignedUrl : getSignedUrl,
            create : create
        }
        
        function getSignedUrl(file){
            const fileName = encodeURIComponent(file.name)
            return $http.get(`api/files/sign?file-name=${fileName}&file-type=${file.type}`)
                .then(xhrSuccess(file))
                .catch(onError)
        }

        function create(fileData) {
            fileData.configFile = {
                headers: {
                    'Content-Type': 'image/png'
                }
            }
            return $http.put(fileData.signedRequest, fileData.file, fileData.configFile)
                .then(xhrSuccess(fileData))
                .catch(onError)
        }

        function xhrSuccess(data) {
            return data 
        }

        function onError(error) {
            return $q.reject(error.data)
        }

    }
})();