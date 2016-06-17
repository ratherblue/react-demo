import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/styles.scss');

import makes from './makes';
import Dropdown from './dropdown';
import StrokeFilters from './stroke-filters';
import swimmingEvents from './swimming-events';

var SearchForm = React.createClass({
    onCourseChange: function(e) {
        this.setState({ courseType: e.target.value });
    },
    onModelChange: function(e) {
        let newValue = e.target.value;

        this.setState({ modelValue: newValue });
    },
    onMakeChange: function(e) {
        let newValue = e.target.value;

        this.setState({ makeValue: newValue });
        this.state.makes.map(function(item, index) {
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
            models: [],
            swimmingEvents: swimmingEvents,
            courseType: 'short'
        };
    },
    render: function() {
        return (
            <div>
                <Dropdown.MakeDropdown data={this.state} onChange={this.onMakeChange} />
                <Dropdown.ModelDropdown data={this.state} onChange={this.onModelChange} />

                <SwimmingEvents data={this.state} onCourseChange={this.onCourseChange} />
            </div>
        );
    }
});

var Events = React.createClass({
    render: function() {
        var events = this.props.data.events.map(function(item, index) {
            return <li key={index}>{item.name}</li>
        }, this);
        return (
            <ul>
                {events}
            </ul>
        );
    }
});

var Stroke = React.createClass({
    render: function() {
        return (
            <li>
                {this.props.data.stroke}

                <Events data={this.props.data} />
            </li>
        );
    }
});

var SwimmingEvents = React.createClass({
    render: function() {
        var stroke = this.props.data.swimmingEvents.map(function(item, index) {
            return <Stroke key={index} data={item} active />;
        });

        return(
            <div>
                <h1>Swimming Events</h1>

                <StrokeFilters data={this.props.data} onChange={this.props.onCourseChange} />

                <ul>
                    {stroke}
                </ul>
            </div>
        );
    }
});


ReactDOM.render(
    <SearchForm />,
    document.getElementById('searchForm')
);
