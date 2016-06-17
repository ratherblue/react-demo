import React from 'react';

var Dropdown = React.createClass({
    render: function() {
        var options = this.props.options.map(function (item, index) {
            return <option key={index} value={item.value}>{item.title}</option>;
        });

        return (
            <select onChange={this.props.onChange}
                    value={this.props.value}>{options}</select>
        );
    }
});


exports.MakeDropdown = React.createClass({
    render: function() {
        return (
            <Dropdown onChange={this.props.onChange}
                    value={this.props.data.makeValue}
                    options={this.props.data.makes} />
        );
    }
});

exports.ModelDropdown = React.createClass({
    render: function() {
        return (
            <Dropdown onChange={this.props.onChange}
                    value={this.props.data.modelValue}
                    options={this.props.data.models} />
        );
    }
});
