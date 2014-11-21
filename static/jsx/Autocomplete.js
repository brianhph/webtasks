require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./react/Autocomplete.jsx":[function(require,module,exports){
module.exports=require('PbP+Ul');
},{}],"PbP+Ul":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

AutocomItem = React.createClass({displayName: 'AutocomItem',
    render: function(){
        return(
            React.createElement("div", null, this.props.title)
        )
    } 
});

Autocomplete = React.createClass({displayName: 'Autocomplete',

    render: function(P){
        var props = this.props,
            displayClass = '',
            list = [],
            autocomStyle;
    
        autocomStyle = {
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            border: '1px solid #dfdfe1',
            borderTop: 'none',
            left: '-1px',
            top: '32px'
        };

        if(props.hideAC){
            displayClass = 'hide';
        }

        acItems = props.acItems;
        for(var i = 0; i < acItems.length; i++){
            item = acItems[i];
            list.push(React.createElement(AutocomItem, {title: item.title}));
        }

        return (
            React.createElement("div", {className: "autocom", style: autocomStyle, className: displayClass}, 
                list
            )
        ) 
    }
});

module.exports = Autocomplete;

},{}],"hK0KT0":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
//    notfound = require('NotFoundModule'),

Bug = React.createClass({displayName: 'Bug',
    render: function () {
        return (
            React.createElement("div", null, "OK!")
        );
    }
});

module.exports = Bug;

},{}],"./react/Bug.jsx":[function(require,module,exports){
module.exports=require('hK0KT0');
},{}],"./react/CategoryBar.jsx":[function(require,module,exports){
module.exports=require('I6Ek9S');
},{}],"I6Ek9S":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

CategoryBar = React.createClass({displayName: 'CategoryBar',
    getInitialState: function(){
        return {
            catState: '',
            totalState: 'hide',
            disableHide: false
        }
    },

    componentDidMount: function(){
        document.addEventListener('click', this._hideSelect, false);
    },

    _swTotal: function(e){
        this.props.cid = 0;
        this.props.clv = 0;

        this.setState({
            catState: 'hide',
            totalState: '',
            disableHide: true
        });

        this.props.onClearCat();
    },

    _selectCat: function(){
        this.setState({
            totalState: 'clicked',  
            disableHide: true
        });
    },

    _hideSelect: function(){
        if(this.state.totalState == 'clicked' && !this.state.disableHide){
            this.setState({
                totalState: ''
            });
        }       

        this.state.disableHide = false;
    },

    _swCat: function(){
        this.setState({
            totalState: 'hide',
            catState: '', 
            disableHide: true
        });     

        this.props.onResetCat();
    },

    render: function(P){
        var props = this.props,
            state = this.state,
            cname = props.cname,
            catClass = state.catState,
            totalClass = state.totalState,
            swTotal;

        return (
            React.createElement("div", null, 
                React.createElement("div", {className: 'cat-box ' + catClass}, 
                    cname, " ", React.createElement("i", {className: "uh-ico", onClick: this._swTotal})
                ), 
                React.createElement("div", {className: 'total ' + totalClass}, 
                    React.createElement("div", {className: "all"}, 
                        "全部分類", 
                        React.createElement("i", {className: "uh-ico arrow_down", onClick: this._selectCat}), 
                        React.createElement("i", {className: "uh-ico arrow_up"})
                    ), 
                    React.createElement("div", {className: "cat-selector", onClick: this._swCat}, 
                        React.createElement("div", {className: "org"}, 
                            cname
                        )
                    )
                )
            )
        ) 
    }
});

module.exports = CategoryBar;

},{}],"./react/LimitSelect.jsx":[function(require,module,exports){
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
},{}],"./react/Product.jsx":[function(require,module,exports){
module.exports=require('FNcvG+');
},{}],"FNcvG+":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react'),
    LimitSelect = require('./LimitSelect.jsx'),

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

},{"./LimitSelect.jsx":"W+i0zc"}],"BWm8zK":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
    CategoryBar = require('./CategoryBar.jsx'),
    Autocomplete = require('./Autocomplete.jsx');

SearchBar = React.createClass({displayName: 'SearchBar',
    input: '',
    preReq: null,

    getInitialState: function(){
        var props = this.props;

        this.cid = props.cid;
        this.clv = props.clv;

        return {
            clv: props.clv,
            cid: props.cid,
            cname: props.cname,
            hideAC: true,
            acItems: []
        }
    },

    _clearCat: function(e){
        this.setState({
            cid: 0,
            clv: 0
        });
    },

    _resetCat: function(e){
        this.setState({
            cid: this.props.cid,
            clv: this.props.clv     
        });         
    },

    autocomplete: function(req){
        if(req.length > 0){
            this.setState({hideAC: false, acItems:req})
        }
    },

    _onKeyUp: function(e){
        var preInput = this.input;

        this.input = e.target.value;

        if(e.target.value == preInput){
            return;
        }

        this.setState({hideAC: true});
        if(e.target.value == ''){
            return;
        } 

        if(this.preReq){
            this.preReq.abort();
        }

        this.preReq = $.ajax({
            type: 'get',
            async: false,
            dataType: 'jsonp',
            jsonp: 'callback',
            url: 'https://tw.search.buy.yahoo.com/search/srp/searchbar?property=shopping&p=' + this.input,
            success: this.autocomplete,
        });
    },

    render: function(P){
        var props = this.props,
            state = this.state,
            categoryBar = '',
            tdStyle;

        tdStyle = {position: "relative", overflow:'visible'};
        
        if(props.cid != '0'){
            categoryBar = React.createElement(CategoryBar, {cname: props.cname, onClearCat: this._clearCat, onResetCat: this._resetCat});
        }

        return (
            React.createElement("form", {action: props.sformUrl, className: "searchbar yui3-skin-sam yui3-u", id: "top_search"}, 
                React.createElement("a", {name: "searhcBox", href: "#searchBox", accessKey: "s", className: "guidetile", 'data-rapid_p': "7"}, ":::商品搜尋框"), 
                React.createElement("fieldset", null, 
                    React.createElement("legend", {className: "vh", id: "aria-legend"}, "搜尋"), 
                    React.createElement("label", {className: "vh", htmlFor: "topsearch_input"}, "搜尋:"), 
                    React.createElement("div", {className: "searchwrapper"}, 
                        React.createElement("div", {className: "searchwrapper-inner"}, 
                            React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, 
                                React.createElement("td", {className: "srp-sbar-cat"}, 
                                    categoryBar
                                ), 
                                React.createElement("td", {className: "srp-sbar-ip", style: tdStyle}, 
                                    React.createElement("input", {type: "text", placeholder: "請輸入 商品 關鍵字", defaultValue: props.p, autoComplete: "off", name: "p", id: "srp-ac-bar", 'data-rapid_p': "8", onKeyUp: this._onKeyUp}), 
                                    React.createElement(Autocomplete, {hideAC: state.hideAC, acItems: state.acItems})
                                )
                            )))
                        ), 
                        React.createElement("input", {type: "submit", value: "搜尋商品", className: "yui3-u searchbtn", id: "UHSearchProperty", 'data-rapid_p': "9"}), 
                        React.createElement("input", {type: "hidden", value: "product", className: "qt", name: "qt", 'data-rapid_p': "10"}), 
                        React.createElement("input", {type: "hidden", autoComplete: "off", className: "cid", name: "cid", 'data-rapid_p': "11", value: state.cid}), 
                        React.createElement("input", {type: "hidden", autoComplete: "off", className: "clv", name: "clv", 'data-rapid_p': "12", value: state.clv})
                    )
                )
            )
        )
    }
});

module.exports = SearchBar;

},{"./Autocomplete.jsx":"PbP+Ul","./CategoryBar.jsx":"I6Ek9S"}],"./react/SearchBar.jsx":[function(require,module,exports){
module.exports=require('BWm8zK');
},{}]},{},["PbP+Ul"])