/*jslint node: true */
'use strict';

var request = require('request'),
    querystring = require('querystring'),
    egsurl = "http://egs0.srch.ect.tw1.yahoo.com:4080/v2/egs/srp.php";

module.exports = function (input) {
    var url = egsurl + '?' + querystring.stringify(input);
        
    return this.task(function (cb) {
        request(url, function(err, resp, body){
            var searchResult = JSON.parse(body),
                sr = searchResult.result,
                catinfo = sr.result.ecsearch.ec_cat_info;

            cb({
                totalhitcount: sr.totalhitcount,
                catinfo: catinfo,
                searchResult: searchResult
            });
            
        });
    });
};
