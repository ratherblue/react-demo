import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/styles.scss');

import DropDownForm from './dropdown-form';
import StrokeFilters from './stroke-filters';
import swimmingEvents from './swimming-events';

var Events = React.createClass({
    render: function() {
        var events = this.props.data.events.map(function(item, index) {
            return <li key={index}>{item.name}</li>;
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

var Strokes = React.createClass({
    render: function() {
        var stroke = this.props.data.map(function(item, index) {
            return <Stroke key={index} data={item} active />;
        });

        return (
            <ul>
                {stroke}
            </ul>
        );
    }
});

var SwimmingEvents = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Swimming Events</h1>

                <StrokeFilters data={this.props.data}
                        onChange={this.props.onCourseChange} />
                <Strokes data={this.props.data.swimmingEvents} />
            </div>
        );
    }
});

var SearchForm = React.createClass({
    onCourseChange: function(e) {
        this.setState({ courseType: e.target.value });
    },
    getInitialState: function() {
        return {
            swimmingEvents: swimmingEvents,
            courseType: 'short'
        };
    },
    render: function() {
        return (
            <SwimmingEvents data={this.state}
                    onCourseChange={this.onCourseChange} />
        );
    }
});


ReactDOM.render(
    <div>
        <DropDownForm />
        <SearchForm />
    </div>,
    document.getElementById('searchForm')
);
