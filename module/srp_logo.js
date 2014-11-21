/*jslint node: true */
'use strict';

module.exports = function(input) {
    var link, title;

    switch(input.property){
        case "shopping":
            title = "Yahoo!奇摩購物中心";
            link = "https://tw.buy.yahoo.com/";
            break;
        case "mall":
            break;
        case "auction":
            break;
        default:
            break;
    }

    return this.task({
        title: title,
        link: link
    });
};
