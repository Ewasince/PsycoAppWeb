export default SecondaryBlocksCtrl;


SecondaryBlocksCtrl.$inject = ['$scope', '$uibModal', '$rootScope', '$log', '$http'];

function SecondaryBlocksCtrl($scope, $uibModal, $rootScope, $log, $http) {
    $log.log("SecondaryBlocksCtrl started!")

    if (!($rootScope.currentSecondaryTab)) {
        $log.log("BACK!!!")
        window.location = "#!/"
    }
    $log.log("SecondaryBlocksCtrl started 2!, currentSecondaryTab=", $rootScope.currentSecondaryTab)

    $scope.secondaryBlocksData = $rootScope.currentSecondaryTab.sBlocks.map(function (el, idx) {
        $log.log("Set ref for el in secondary ", idx)
        var callbacksObj = {
            callback: () => {
                $log.log("Link to secondary block!")
            }
        }

        return Object.assign(el, callbacksObj)

    });

    $log.log("SecondaryBlocksCtrl started 3!")

    // $scope.tabsData = {}
    //
    // $http.get("get_main_blocks")
    //         .then(function (data) {
    //             setMainBlock(data.main_blocks);
    //         }, function () {
    //             setMainBlock([
    //                 "kpt",
    //                 "pidor",
    //                 "huy",
    //             ])
    //         });
    //
    //
    // function setMainBlock(data) {
    //     $scope.tabsData = data.map(function (el) {
    //         $log.log("Test 1 ", el);
    //
    //         return {
    //             block_name: el,
    //             callback: () => {
    //                 $log.log("Hello, Angular!");
    //                 console.log("Hello, Angular2!");
    //             }
    //         }
    //     });
    // }
};








