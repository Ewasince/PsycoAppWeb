import PrimaryBlocksCtrl from './primaryBlocks/PrimaryBlocksCtrl.js'
import SecondaryBlocksCtrl from './secondaryBlocks/SecondaryBlocksCtrl.js'
import TextBlockCtrl from './secondaryBlocks/text/textBlockCtrl.js'
import DiaryBlockCtrl from './secondaryBlocks/diary/diaryBlockCtrl.js'
import TableBlockCtrl from './secondaryBlocks/table/tableBlockCtrl.js'

console.log("Index started!")
angular.module("PsychoApp", [
    /* Thirdparty modules */
    "ngRoute",
    "ui.bootstrap",
    'restangular',
])
        .controller('PrimaryBlocksCtrl', PrimaryBlocksCtrl)
        .controller('SecondaryBlocksCtrl', SecondaryBlocksCtrl)
        .controller('TextBlockCtrl', TextBlockCtrl)
        .controller('DiaryBlockCtrl', DiaryBlockCtrl)
        .controller('TableBlockCtrl', TableBlockCtrl)
        .controller('MainCtrl', function ($rootScope, $http, $log) {
            $log.log("MainCtrl started!")


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
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ",
                                        },
                                    },
                                    {
                                        name: "block2",
                                        type: "table",
                                        data: {
                                        },
                                    },
                                    {
                                        name: "block3",
                                        type: "diary",
                                        data: {
                                        },
                                    },
                                ]
                            }, {
                                name: "pidor",
                                sBlocks: [
                                    {
                                        name: "block4",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 4",
                                        },
                                    },
                                    {
                                        name: "block5",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 5",
                                        },
                                    },
                                    {
                                        name: "block6",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 6",
                                        },
                                    },
                                    {
                                        name: "block6.1",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 6.1",
                                        },
                                    },
                                ]
                            }, {
                                name: "huy",
                                sBlocks: [
                                    {
                                        name: "block7",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 7",
                                        },
                                    },
                                    {
                                        name: "block8",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 8",
                                        },
                                    },
                                    {
                                        name: "block9",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 9",
                                        },
                                    },
                                    {
                                        name: "block9.1",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 9.1",
                                        },
                                    },
                                    {
                                        name: "block9.2",
                                        type: "text",
                                        data: {
                                            text: "Текст рыбы бляяя ЯХААА БААЛЯЯЯ 9.2",
                                        },
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
            $routeProvider.when('/text',
                    {
                        templateUrl: 'app/secondaryBlocks/text/text.html',
                        controller: 'TextBlockCtrl',
                    });
            $routeProvider.when('/table',
                    {
                        templateUrl: 'app/secondaryBlocks/table/table.html',
                        controller: 'TableBlockCtrl',
                    });
            $routeProvider.when('/diary',
                    {
                        templateUrl: 'app/secondaryBlocks/diary/diary.html',
                        controller: 'DiaryBlockCtrl',
                    });
            // $routeProvider.when('/answer',
            //     {
            //         templateUrl: 'views/answer.html',
            //         controller: 'AnswerController'
            //     });
        });