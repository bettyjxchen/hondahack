(function () {
    'use strict'

    angular.module('client.services')
        .factory('gritterService', GritterServiceFactory)

        GritterServiceFactory.$inject = [ '$window', '$q']

    function  GritterServiceFactory( $window, $q) {
        let gritter = $window.$.gritter    


        return {
            success: _success,
            error: _error,
            info: _info
        }



        function _success(message, isSticky) {
            let deferred = $q.defer();
            gritter.add({
                title: "Success!",
                text: message,
                sticky: isSticky,
                after_close: (function (e, manual_close) {
                    deferred.resolve(`I'm a callback that happens after Alert close ${new Date()}`)
                })

            })
            return deferred.promise
        }

        function _error(message, isSticky) {
            let deferred = $q.defer();
            gritter.add({
                title: "Error!",
                text: message,
                sticky: isSticky,
                after_close: (function (e, manual_close) {
                    deferred.resolve(`I'm a callback that happens after Alert close ${new Date()}`)
                })
            })
            return deferred.promise
        }

        function _info(subject, message, isSticky) {
            let deferred = $q.defer();
            gritter.add({
                title: subject,
                text: message,
                sticky: isSticky,
                after_close: (function (e, manual_close) {
                    deferred.resolve(`I'm a callback that happens after Alert close ${new Date()}`)
                })
            })
            return deferred.promise
        }
    }
})();