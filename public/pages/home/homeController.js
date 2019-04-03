

ethChainApp.controller("homeCtrl", function($scope, $http){
   $scope.firstName = "Jim";
   $scope.lastName = "Bean";

   $http.get('/api/ethPrice')
       .then(function(response){

            console.log("Wir haben eine response");
            console.log(response.data);

       });


});