/** @jsx React.DOM */
var React = require('react');
    CategoryBar = require('./CategoryBar.jsx'),
    Autocomplete = require('./Autocomplete.jsx');

SearchBar = React.createClass({
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
            categoryBar = <CategoryBar cname={props.cname} onClearCat={this._clearCat} onResetCat={this._resetCat} />;
        }

        return (
            <form action={props.sformUrl} className="searchbar yui3-skin-sam yui3-u" id="top_search" >
                <a name="searhcBox" href="#searchBox" accessKey="s" className="guidetile" data-rapid_p="7">:::商品搜尋框</a>
                <fieldset>
                    <legend className="vh" id="aria-legend">搜尋</legend>
                    <label className="vh" htmlFor="topsearch_input">搜尋:</label>
                    <div className="searchwrapper">
                        <div className="searchwrapper-inner">
                            <table><tbody><tr>
                                <td className="srp-sbar-cat">
                                    {categoryBar}
                                </td>
                                <td className="srp-sbar-ip" style={tdStyle}>
                                    <input type="text" placeholder="請輸入 商品 關鍵字" defaultValue={props.p} autoComplete="off" name="p" id="srp-ac-bar" data-rapid_p="8" onKeyUp={this._onKeyUp} />
                                    <Autocomplete hideAC={state.hideAC} acItems={state.acItems}/>
                                </td>
                            </tr></tbody></table>
                        </div>
                        <input type="submit" value="搜尋商品" className="yui3-u searchbtn" id="UHSearchProperty" data-rapid_p="9" />
                        <input type="hidden" value="product" className="qt" name="qt" data-rapid_p="10" />
                        <input type="hidden" autoComplete="off" className="cid" name="cid" data-rapid_p="11" value={state.cid} />
                        <input type="hidden" autoComplete="off" className="clv" name="clv" data-rapid_p="12" value={state.clv} />
                    </div>
                </fieldset>
            </form>
        )
    }
});

module.exports = SearchBar;
