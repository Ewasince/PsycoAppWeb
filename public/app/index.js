import StartCtrl from './startPage/startPageCtrl.js'

console.log("Hello, Angular3!")
angular.module("PsychoApp", [
    /* Thirdparty modules */
    "ngRoute",
    "ui.bootstrap",
    'restangular',
])
    .controller('StartCtrl', StartCtrl)

    .config(function ($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: 'app/startPage/startPage.html',
                controller: 'StartCtrl',
            });
        $routeProvider.when('/kek',
            {
                templateUrl: 'app/startPage/startPage.html',
                controller: 'StartCtrl',
            });
        // $routeProvider.when('/answer',
        //     {
        //         templateUrl: 'views/answer.html',
        //         controller: 'AnswerController'
        //     });
    });