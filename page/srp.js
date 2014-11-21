/*jslint node: true */
'use strict';

module.exports = function () {
    return this.task({
        eyebrow: this.input('property').pipe(this.module('srp_eyebrow')),
        logo: this.input('property').pipe(this.module('srp_logo')),
        searchBar: this.input('initSrpParam').pipe(this.data('search')).pipe(this.data('srp_searchbar')).pipe(this.dreact('SearchBar')),
        persona: this.input('initSrpParam').pipe(this.data('search')).pipe(this.module('srp_persona'))
    }).transform(function(R){
        return {
            eyebrow: R.eyebrow,
            headerGroup: [R.logo, R.searchBar, R.persona]    
        }
    });
};
