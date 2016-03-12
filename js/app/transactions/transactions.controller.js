IdimsApp.Controllers.controller('TransactionController', ['$scope', 'TransactionService', function($scope, TransactionService) {

    this.getTransactions =  retrieveTransactions();

    function retrieveTransactions() {
        return TransactionService.listTransactions().then(function(data) {
            $scope.transactions = data;
        });
    }

}]);
