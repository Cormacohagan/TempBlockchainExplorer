var express = require('express');
var request = require('request');
var router = require('express').Router();


/* GET users listing. */
router.get('/ethPrice', function(req, res) {
    request("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=GBP",
        function(error, response, body){
        var swag = JSON.parse(body);

        //Parse large dataset to get Eth Price, Eth Market Cap, % change in past 24 hours,
        // Current block, Supply,


        // if((swag.Data).some(e => e.CoinInfo.Name == 'ETH')){
        //     console.log(swag.Data);
        // }

        var elementPos = swag.Data.map(function(x) {return x;}).indexOf("ETH");

        console.log(elementPos);


        // for(i in swag.Data){
        //
        //     if(swag.Data[i].CoinInfo.Name == "ETH"){
        //         console.log(swag.Data[i]);
        //         res.send("Banana");
        //     }
        // }

        res.send("Big money");

    })
});




module.exports = router;



//Eth Price
//https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken

//Blocks
//https://api.etherscan.io/api?module=block&action=getblockreward&blockno=2165403&apikey=YourApiKeyToken

//BIG DADDY
//https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=GBP

//SOcial Data for Eth
//https://min-api.cryptocompare.com/data/social/coin/latest?coinId=7605


//Etherscan
//API KEY = TJ21I2N31DUM5CB2GAY54ZRJRI3T9RHAAJ

//Cryptocompare
//6e5e516bb82de05baaa943a31b9948a38205eb4cd8b37cde34e859c95aa403d2