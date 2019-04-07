

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

           if(response.data){
                var blockNum = response.data;

                for(var i=0;i<10;i++){
                    createTableElements("recentBlockTable", (blockNum-i));
                }
           }

           $http.get('/eth/recentTransactions')
               .then(function(response){

                   for(i in response.data){
                       createTableElements("recentTransacTable", (response.data[i]));
                   }


               });
       });

    function createTableElements(parentDiv, content){

        var blockTable = document.getElementById(parentDiv);

        var tableData = document.createElement("div");
        tableData.className = "blockContent";

        var link = document.createElement("a");

        if(content.length > 20){
            var linkText = document.createTextNode(content.substring(0,40));
        }
        else{
            var linkText = document.createTextNode(content);
        }

        link.appendChild(linkText);

        if(content.length > 20){
            link.href = "/transaction/"+content;
        }
        else{
            link.href = "/block/"+content;
        }

        tableData.appendChild(link);
        blockTable.appendChild(tableData);
    }

    $scope.searchBox1 = function(){

        var text = document.getElementById('searchTxt1').value;

        if(text.length == 0){
            console.log("Stop trying to search the empty field");
        }
        else if(text.length <=15){
            window.location.href = "/block/"+text;
        }
        else{
            window.location.href = "/transaction/"+text;
        }
    }

   $scope.searchBox2 = function(){

       var text = document.getElementById('searchTxt2').value;

       if(text.length == 0){
           console.log("Stop trying to search the empty field");
       }
       else if(text.length <=15){
           window.location.href = "/block/"+text;
       }
       else{
           window.location.href = "/transaction/"+text;
       }

    }


});