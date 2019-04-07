

ethChainApp.controller("homeCtrl", function($scope, $http){

    //Populate general eth data for table
   $http.get('/eth/ethStats')
       .then(function(response){

            $scope.price = parseFloat(response.data.price).toFixed(2);
            $scope.marketCap = (parseFloat(response.data.marketCap)/100000000).toFixed(2);
            $scope.mktCapChange = parseFloat(response.data.mktCapChange24).toFixed(2);
            $scope.blockNum = response.data.blockNum;
            $scope.supply = response.data.supply;
            $scope.volume = parseFloat(response.data.volume).toFixed(2);

       });

   //Populate data for recent transactions & blocks
   $http.get('/eth/latestBlock')
       .then(function(response){

           var blockData = [];

           if(response.data){
                var blockNum = response.data;

                for(var i=0; i<10; i++){

                    var searchParams = {blockNumber:(blockNum-i)}

                    $http.get('/eth/blockData', { params:searchParams })
                        .then(function(response){

                            blockData.push(response.data);
                            createTableElements("recentBlockTable", response.data.number);

                        });
                }
           }

           $http.get('/eth/recentTransactions')
               .then(function(response){

                   for(i in response.data){
                       createTableElements("recentTransacTable", (response.data[i]).substring(0,40));
                   }


               });
       });

    function createTableElements(parentDiv, content){
        var blockTable = document.getElementById(parentDiv);

        var tableData = document.createElement("div");
        tableData.className = "blockContent";

        var link = document.createElement("a");
        var linkText = document.createTextNode(content);

        link.appendChild(linkText);
        link.href = "http://www.google.co.uk";

        tableData.appendChild(link);
        blockTable.appendChild(tableData);
    }


});