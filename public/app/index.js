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
                        $log.log("Set callbacks")
                        setMainBlock({
                            request: [{
                                name: "kpt",
                                sBlocks: [
                                    "block1",
                                    "block2",
                                    "block3",
                                ]
                            }, {
                                name: "pidor",
                                sBlocks: [
                                    "block4",
                                    "block5",
                                    "block6",
                                    "block6.1",
                                ]
                            }, {
                                name: "huy",
                                sBlocks: [
                                    "block7",
                                    "block8",
                                    "block9",
                                    "block9.1",
                                    "block9.2",
                                ]
                            },
                            ]
                        })
                    });


            function setMainBlock(data) {
                $log.log("Set callbacks 2")
                $log.log("Set callbacks, data.request=", data.request)


                $rootScope.mainBlocks = data.request.map(function (el, idx) {
                    $log.log("Set ref for el ", idx)
                    var callbacsObj = {
                        callback: () => {
                            $rootScope.currentSecondaryTab = el;
                        }
                    }

                    return Object.assign(el, callbacsObj)

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