/** @jsx React.DOM */
var React = require('react');

AutocomItem = React.createClass({
    render: function(){
        return(
            <div>{this.props.title}</div>
        )
    } 
});

Autocomplete = React.createClass({

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
            list.push(<AutocomItem title={item.title} />);
        }

        return (
            <div className="autocom" style={autocomStyle} className={displayClass}>
                {list}        
            </div>
        ) 
    }
});

module.exports = Autocomplete;
