export default StartCtrl;


StartCtrl.$inject = ['$scope', '$uibModal', '$rootScope', '$log', '$http'];

function StartCtrl($scope, $uibModal, $rootScope, $log, $http) {

    $scope.mainBlocks = {}

    $http.get("get_main_blocks")
            .then(function (data) {
                setMainBlock(data.main_blocks);
            }, function () {
                setMainBlock([
                    "kpt",
                    "pidor",
                    "huy",
                ])
            });


    function setMainBlock(data) {
        $scope.mainBlocks = data.map(function (el) {
            $log.log("Test 1 ", el);

            return {
                block_name: el,
                callback: () => {
                    $log.log("Hello, Angular!");
                    console.log("Hello, Angular2!");
                }
            }
        });
    }
};








