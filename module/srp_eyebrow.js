/*jslint node: true */
'use strict';

module.exports = function(input) {
    var list = [];

    switch(input){
        case "shopping":
            list = [
                {'ylk': 'eb_hp', 'class': 'uh-ico home', 'url': 'https://tw.yahoo.com/', 'pos': 1, 'val': '首頁'},
                {'ylk': 'eb_mall', 'class': '', 'url': 'https://tw.mall.yahoo.com/', 'pos': 2, 'val': '超級商城'},
                {'ylk': 'eb_shp', 'class': '', 'url': 'https://tw.buy.yahoo.com/', 'pos': 3, 'val': '購物中心'},
                {'ylk': 'eb_splus', 'class': '', 'url': 'https://tw.serviceplus.yahoo.com/', 'pos': 4, 'val': '服務+'},
                {'ylk': 'eb_uww', 'class': '', 'url': 'https://tw.uwant.yahoo.com/', 'pos': 5, 'val': '慾望牆'}
            ];      
            break;

        case "mall":
            break;
        case "auction":
            break;
        default:
            break;
    }

    return this.task({
        list: list
    });
};
