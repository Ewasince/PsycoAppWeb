export default TableBlockCtrl;


TableBlockCtrl.$inject = ['$scope', '$uibModal', '$rootScope', '$log', '$http'];

function TableBlockCtrl($scope, $uibModal, $rootScope, $log, $http) {
    $log.log("TextBlockCtrl started!")

    if (!($rootScope.currentSecondaryTabData)) {
        $log.log("BACK!!!")
        window.location = "#!/second"
    }
    $log.log("TextBlockCtrl started2!")

    $scope.text = $rootScope.currentSecondaryTabData.text
};








