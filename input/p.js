/*jslint node: true */
'use strict';

var http = require("http");

module.exports = function () {
    return this.task({
        p: this.query('p') 
    }).transform(function(R){
        return {
            p: R.p
        }
    });
};
