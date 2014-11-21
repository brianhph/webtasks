require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./react/LimitSelect.jsx":[function(require,module,exports){
module.exports=require('W+i0zc');
},{}],"W+i0zc":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react'),

LimitSelect = React.createClass({displayName: 'LimitSelect',
    render: function () {
        var options = [],
            I;

        for (I=0;I<this.props.max;I++) {
            options.push(
                React.createElement("option", null, I+1)
            );
        };
        return (
            React.createElement("select", null, 
             options
            )
        );
    }
});

module.exports = LimitSelect;

},{}],"tSjdzg":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react'),

Path = React.createClass({displayName: 'Path',
    render: function () {
        var paths = this.props.path.map(function (P) {
            return (
                React.createElement("li", null, React.createElement("a", {href: '/cate/' + P.id}, P.title))
            )
        });
        return (
            React.createElement("ul", {className: "path"}, 
             paths
            )
        );
    }
});

module.exports = Path;

},{}],"./react/Path.jsx":[function(require,module,exports){
module.exports=require('tSjdzg');
},{}],"FNcvG+":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react'),
    LimitSelect = require('./limitSelect.jsx'),

Product = React.createClass({displayName: 'Product',
    getInitialState: function () {
        return {selectedSpec: this.props.specs[0].id}
    },
    handleSpecChange: function () {
        this.setState({selectedSpec: event.target.value});
    },
    render: function () {
        var specs = [],
            max,
            I;

        for (I=0;I<this.props.specs.length;I++) {
            if (this.props.specs[I].id == this.state.selectedSpec) {
                max = this.props.specs[I].limit;
            }
            specs.push(
                React.createElement("option", {value: this.props.specs[I].id}, this.props.specs[I].title)
            );
        }

        return (
React.createElement("div", null, 
 React.createElement("h1", null, this.props.title), 
 React.createElement("p", null, this.props.description), 
 React.createElement("span", null, "Price: ", React.createElement("i", null, "$"), React.createElement("b", null, this.props.price)), 
 React.createElement("div", null, "Pick a spec:", React.createElement("select", {onChange: this.handleSpecChange, value: this.state.selectedSpec}, specs), 
  React.createElement(LimitSelect, {max: max})
 )
)
        );
    }
});

module.exports = Product;

},{"./limitSelect.jsx":7}],"./react/Product.jsx":[function(require,module,exports){
module.exports=require('FNcvG+');
},{}],7:[function(require,module,exports){
module.exports=require("W+i0zc")
},{}],"a26TBf":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

CategoryBar = React.createClass({displayName: 'CategoryBar',
    getInitialState: function(){
        return {
            catState: '',
            totalState: 'hide'
        }
    },

    _swTotal: function(e){
    alert(12);
        this.setState({
            catState: 'hide',
            totalState: ''
        });
    },

    render: function(P){
        var props = this.props,
            state = this.state,
            cname = props.cname,
            catClass = 'cat-box ' + state.catState,
            totalClass = 'total ' + state.totalState,
            swTotal;

        console.log(123);
        return (
            React.createElement("td", {className: "srp-sbar-cat"}, 
                React.createElement("div", {className: catClass}, 
                    cname, " ", React.createElement("i", {className: "uh-ico", onClick: this._swTotal})
                ), 
                React.createElement("div", {className: totalClass}, 
                    React.createElement("div", {className: "all"}, 
                        "全部分類", 
                        React.createElement("i", {className: "uh-ico arrow_down"}), 
                        React.createElement("i", {className: "uh-ico arrow_up"})
                    ), 
                    React.createElement("div", {className: "cat-selector"}, 
                        React.createElement("div", {className: "org"}, 
                            cname
                        )
                    )
                )
            )
        ) 
    }
});


SearchBar = React.createClass({displayName: 'SearchBar',
    _onKeyDown: function(e){
        console.log(123);
    },
    test: function(){
    alert(33);
    },

    render: function(P){
        var props = this.props,
            categoryBar = '';

        if(props.cid != '0'){
            categoryBar = React.createElement(CategoryBar, {cname: props.cname});
        }

        return (
            React.createElement("form", {action: props.sformUrl, className: "searchbar yui3-skin-sam yui3-u", id: "top_search", onClick: this.test}, 
                React.createElement("a", {name: "searhcBox", href: "#searchBox", accessKey: "s", className: "guidetile", 'data-rapid_p': "7"}, ":::商品搜尋框"), 
                React.createElement("fieldset", null, 
                    React.createElement("legend", {className: "vh", id: "aria-legend"}, "搜尋"), 
                    React.createElement("label", {className: "vh", htmlFor: "topsearch_input"}, "搜尋:"), 
                    React.createElement("div", {className: "searchwrapper"}, 
                        React.createElement("div", {className: "searchwrapper-inner"}, 
                            React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, 
                                categoryBar, 
                                React.createElement("td", {className: "srp-sbar-ip"}, 
                                    React.createElement("input", {type: "text", placeholder: "請輸入 商品 關鍵字", defaultValue: props.p, autoComplete: "off", name: "p", id: "srp-ac-bar", 'data-rapid_p': "8", onKeyDown: this._onKeyDown})
                                )
                            )))
                        ), 
                        React.createElement("input", {type: "submit", value: "搜尋商品", className: "yui3-u searchbtn", id: "UHSearchProperty", 'data-rapid_p': "9"}), 
                        React.createElement("input", {type: "hidden", value: "product", className: "qt", name: "qt", 'data-rapid_p': "10"}), 
                        React.createElement("input", {type: "hidden", value: "24230", autoComplete: "off", className: "cid", name: "cid", 'data-rapid_p': "11"}), 
                        React.createElement("input", {type: "hidden", value: "2", autoComplete: "off", className: "clv", name: "clv", 'data-rapid_p': "12"})
                    )
                )
            )
        )
    }
});

module.exports = SearchBar;

},{}],"./react/srp_searchBar.jsx":[function(require,module,exports){
module.exports=require('a26TBf');
},{}]},{},["a26TBf"])