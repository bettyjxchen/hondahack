
(function () {
    'use strict';
    angular.module('client.site')
        .controller('fileTestController', FileTestController)

    FileTestController.$inject = ['$log', 'filesService', '$scope', '$state', '$stateParams']

    function FileTestController($log, filesService, $scope, $state, $stateParams) {
        var vm = this
        vm.selectedFiles1 = []
        var fileLoaded = null
        var awsUrl = null
        var originalImageUrl = null
        vm.fileChanged = _fileChanged
        vm.fileUploadRadioBtn = _fileUploadRadioBtn

        init()
        function init() {
            $scope.$on("fileUpload.originalImage", (e, originalImageUrl) => {
                vm.imageUrl = originalImageUrl
            })

            $scope.$on("fileUpload.removeSelectedImage", (e, stateMode) => {
                if(stateMode === "editMode" && vm.imageUrl){
                    vm.imageSelection = 'originalImage'
                } else if(stateMode === "editMode" && !vm.imageUrl){
                    vm.imageSelection = 'newImage'
                }
                vm.image = null
                $scope.$broadcast("SMOC.removeImageToUploadDir")
            })

            $scope.$on("fileUpload.urlNeeded", function () {
                if (vm.imageSelection === 'newImage' && vm.selectedFiles1.length !== 0 ) {
                    const file = vm.selectedFiles1[0];
                    filesService.getSignedUrl(file)
                        .then(data => {
                            data.data.file = file
                            awsUrl = data.data.url
                            return filesService.create(data.data)
                        })
                        .then(() => {
                            //------------------file events--------------
                            $scope.$emit("fileUpload.urlAvailable", awsUrl)
                            //----------------------------------------
                        })
                        .catch(data => $log.log(`Error: ${data.error}`))
                } else if (vm.imageSelection === 'originalImage') {
                    $scope.$emit("fileUpload.urlAvailable", vm.imageUrl)
                }
                else if (vm.imageSelection === 'noImage') {
                    $scope.$emit("fileUpload.urlAvailable")
                } else if (vm.imageSelection === 'newImage' && vm.selectedFiles1.length == 0){
                    vm.newImageValidation = true
                }
            })
        }

        function _fileUploadRadioBtn(){
            vm.image = null
        }

        $scope.$on("fileUpload.createFormMode", (e, stateMode) => {
                if(stateMode === "editMode" && vm.imageUrl){
                    vm.imageSelectOptions = true
                    vm.imageSelection = 'originalImage'
                } else if (stateMode === "editMode" && !vm.imageUrl){
                    vm.imageSelectOptions = false
                    vm.imageSelection = 'newImage'
                }
                else if (!stateMode) {
                    vm.imageSelection = 'newImage'
                    vm.imageSelectOptions = false
                } 
        })

        function _fileChanged() {
            if (vm.selectedFiles1.length !== 0) {
                vm.newImageValidation = false
                var reader = new FileReader();
                reader.onload = (e) => {
                    //redraws the view; taking off the watch cycle in angular
                    $scope.$apply(() => {
                        vm.image = reader.result
                    })
                }
                reader.readAsDataURL(vm.selectedFiles1[0]);
            }
        }
    }
})();