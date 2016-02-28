// creating application routing and attaching all necessary dependencies
var idimsApp = angular.module('idimsApp', [ 'ngRoute', 'idimsApp.controllers', 'idimsApp.directives']);

idimsApp.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'js/app/session/home.html'
            })
            .when('/transactions', {
                templateUrl: 'js/app/transactions/transactions.html',
                controller: 'TransactionsController',
                controllerAs: 'txnCtrl'
            })
            .when('/inventory/remove', {
                templateUrl: 'js/app/inventory/removeInventory.html',
                controller: 'InventoryController',
                controllerAs: 'inventoryCtrl'
            })
            .when('/inventory/add', {
                templateUrl: 'js/app/inventory/addInventory.html',
                controller: 'InventoryController',
                controllerAs: 'inventoryCtrl'
            })
            .otherwise({redirectTo: '/'});
    } ]);


idimsApp.run([ "$rootScope", "$http", "$log", "$location", "$timeout", "$q", function ($rootScope, $http, $log, $location, $timeout, $q) {

} ]);
