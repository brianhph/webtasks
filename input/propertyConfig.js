/*jslint node: true */
'use strict';

var http = require("http");

module.exports = function () {
    return this.input('property').transform(function(R){
        switch(R){
            case 'shopping':
                return {
                    sformUrl: 'https://tw.search.buy.yahoo.com/search/shopping/product'
                }

                break;
            default:
                return { 
                    sformUrl: 'https://tw.search.mall.yahoo.com/search/mall/product'
                }
                break;
        }
    });
};
