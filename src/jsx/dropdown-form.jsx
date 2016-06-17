import React from 'react';

import makes from './makes';
import Dropdown from './dropdown';

export default React.createClass({
    onModelChange: function(e) {
        let newValue = e.target.value;

        this.setState({ modelValue: newValue });
    },
    onMakeChange: function(e) {
        let newValue = e.target.value;

        this.setState({ makeValue: newValue });
        this.state.makes.map(function(item) {
            if (item.value === newValue) {
                this.setState({ models: item.models });
            }
        }, this);
    },
    getInitialState: function() {
        return {
            makeValue: 'Make',
            makes: makes,
            modelValue: 'Model',
            models: []
        };
    },
    render: function() {
        return (
            <div>
                <Dropdown.MakeDropdown data={this.state}
                        onChange={this.onMakeChange} />
                <Dropdown.ModelDropdown data={this.state}
                        onChange={this.onModelChange} />
            </div>
        );
    }
});
