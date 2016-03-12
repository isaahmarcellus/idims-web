IdimsApp.Services.service('TransactionService', ['$http', function($http){

    this.listTransactions = function(){

       return $http.get('http://localhost:8080/transactions')
            .then(function(response){
               console.log(response);
                return response.data;
            });
    };

    this.addTransaction = function(txnData){
        return {};
    };

}]);