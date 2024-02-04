export default SecondaryBlocksCtrl;


SecondaryBlocksCtrl.$inject = ['$scope', '$uibModal', '$rootScope', '$log', '$http'];

function SecondaryBlocksCtrl($scope, $uibModal, $rootScope, $log, $http) {
    $log.log("SecondaryBlocksCtrl started!")

    if (!($rootScope.currentPrimaryTabData)) {
        $log.log("BACK!!!")
        window.location = "#!/"
    }
    $log.log("SecondaryBlocksCtrl started 2!, currentPrimaryTabData=", $rootScope.currentPrimaryTabData)

    $scope.secondaryBlocksData = $rootScope.currentPrimaryTabData.sBlocks.map(function (el, idx) {
        $log.log("Set ref for el in secondary ", idx)
        var callbacksObj = {
            callback: () => {
                $log.log("Link to secondary block!")
                $rootScope.currentSecondaryTabData = el.data
                switch (el.type) {
                    case "text" :
                        window.location = "#!/text"
                        break
                    case "table" :
                        window.location = "#!/table"
                        break
                    case "diary" :
                        window.location = "#!/diary"
                        break
                }

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








