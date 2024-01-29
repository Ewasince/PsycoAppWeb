import PrimaryBlocksCtrl from './primaryBlocks/PrimaryBlocksCtrl.js'
import SecondaryBlocksCtrl from './secondaryBlocks/SecondaryBlocksCtrl.js'

console.log("Index started!")
angular.module("PsychoApp", [
    /* Thirdparty modules */
    "ngRoute",
    "ui.bootstrap",
    'restangular',
])
        .controller('PrimaryBlocksCtrl', PrimaryBlocksCtrl)
        .controller('SecondaryBlocksCtrl', SecondaryBlocksCtrl)
        .controller('MainCtrl', function ($rootScope, $http, $log) {
            $log.log("config1 started!")


            $rootScope.mainBlocks = {}

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
                $rootScope.mainBlocks = data.map(function (el) {
                    return {
                        block_name: el,
                        callback: () => {
                            $log.log("Set ref for el ", el);
                        }
                    }
                });
            }
        })

        .config(function ($routeProvider) {
            console.log("config started!")

            $routeProvider.when('/',
                    {
                        templateUrl: 'app/primaryBlocks/PrimaryBlocks.html',
                        controller: 'PrimaryBlocksCtrl',
                    });
            $routeProvider.when('/second',
                    {
                        templateUrl: 'app/secondaryBlocks/SecondaryBlocks.html',
                        controller: 'SecondaryBlocksCtrl',
                    });
            // $routeProvider.when('/answer',
            //     {
            //         templateUrl: 'views/answer.html',
            //         controller: 'AnswerController'
            //     });
        });