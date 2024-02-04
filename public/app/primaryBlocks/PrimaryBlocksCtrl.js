export default PrimaryBlocksCtrl;


PrimaryBlocksCtrl.$inject = ['$scope', '$uibModal', '$rootScope', '$log', '$http'];

function PrimaryBlocksCtrl($scope, $uibModal, $rootScope, $log, $http) {
    $log.log("PrimaryBlocksCtrl started!")


    $scope.mainBlocksData = $rootScope.tabsData.request.map(function (el, idx) {
        $log.log("Set ref for el ", idx)
        var callbacsObj = {
            callback: () => {
                $rootScope.currentSecondaryTab = el;
            }
        }

        return Object.assign(el, callbacsObj)

    });

};








