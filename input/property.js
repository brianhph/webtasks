/*jslint node: true */
'use strict';

var http = require("http");

module.exports = function () {
    return this.param('property').transform(function(R){
        return R.property || 'shopping';
    });
};
