export default DiaryBlockCtrl;


DiaryBlockCtrl.$inject = ['$scope', '$uibModal', '$rootScope', '$log', '$http'];

function DiaryBlockCtrl($scope, $uibModal, $rootScope, $log, $http) {
    $log.log("TextBlockCtrl started!")

    if (!($rootScope.currentSecondaryTabData)) {
        $log.log("BACK!!!")
        window.location = "#!/second"
    }
    $log.log("TextBlockCtrl started2!")

    $scope.text = $rootScope.currentSecondaryTabData.text
};








