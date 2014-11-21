/*jslint node: true */
'use strict';

var http = require("http");

module.exports = function () {
    return this.task({
        property: this.input('property'),
        keyword: this.input('p').pick('p'),
        categoryid: this.query('cid'),
        categorylv: this.query('clv')
    }).transform(function(R){
        R.categoryid = R.categoryid? R.categoryid: 0;
        R.categorylv = R.categorylv? R.categorylv: 0;

        return R;
    });
};
