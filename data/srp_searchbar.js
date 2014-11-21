/*jslint node: true */
'use strict';

module.exports = function (input) {

    return this.task({
        p: this.input('p').pick('p'),
        sformUrl: this.input('propertyConfig').pick('sformUrl') 
    }).transform(function(R){
        var cid = input.catinfo[0].id,
            cname = input.catinfo[0].name,
            clv = input.catinfo[0].level;

        return {
            p: R.p,
            cid: cid,
            clv: clv,
            cname: cname,
        }        
    });
};
