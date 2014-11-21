/** @jsx React.DOM */
var React = require('react');

CategoryBar = React.createClass({
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
            <div>
                <div className={'cat-box ' + catClass}>
                    {cname} <i className="uh-ico" onClick={this._swTotal}></i>
                </div>
                <div className={'total ' + totalClass}>
                    <div className="all">
                        全部分類
                        <i className="uh-ico arrow_down" onClick={this._selectCat}></i>
                        <i className="uh-ico arrow_up"></i>
                    </div>
                    <div className="cat-selector" onClick={this._swCat}>
                        <div className="org">
                            {cname}
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
});

module.exports = CategoryBar;
