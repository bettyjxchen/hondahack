(function(){
    "use strict"
    angular.module('client.site')
            .factory("sideNavService", SideNavService);
SideNavService.inject = ["$http", "$q"];
function SideNavService($http, $q){
        return{
            get: _get
        };

        function _get(){
            return $http.get("http://geohub.lacity.org/datasets/230abc621b144dbc96cca83d65bd454d_0.geojson",{withCredentials: true})
            .then(Success).catch(Error);
        }
        function Success(res){
            return resp;
            console.log(res);
        }
       
        function Error(err) {
            return $q.reject(err);
            console.log(err);
        }
}
})();