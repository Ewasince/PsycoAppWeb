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


            $rootScope.tabsData = {}

            $http.get("get_main_blocks")
                    .then(function (data) {
                        $rootScope.tabsData = data.main_blocks;
                    }, function () {
                        // $log.log("Set callbacks")
                        $rootScope.tabsData = {
                            request: [{
                                name: "kpt",
                                sBlocks: [
                                    {
                                        name: "block1",
                                        type: "text",
                                    },
                                    {
                                        name: "block2",
                                        type: "text",
                                    },
                                    {
                                        name: "block3",
                                        type: "text",
                                    },
                                ]
                            }, {
                                name: "pidor",
                                sBlocks: [
                                    {
                                        name: "block4",
                                        type: "text",
                                    },
                                    {
                                        name: "block5",
                                        type: "text",
                                    },
                                    {
                                        name: "block6",
                                        type: "text",
                                    },
                                    {
                                        name: "block6.1",
                                        type: "text",
                                    },
                                ]
                            }, {
                                name: "huy",
                                sBlocks: [
                                    {
                                        name: "block7",
                                        type: "text",
                                    },
                                    {
                                        name: "block8",
                                        type: "text",
                                    },
                                    {
                                        name: "block9",
                                        type: "text",
                                    },
                                    {
                                        name: "block9.1",
                                        type: "text",
                                    },
                                    {
                                        name: "block9.2",
                                        type: "text",
                                    },
                                ]
                            },
                            ]
                        }
                    });
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