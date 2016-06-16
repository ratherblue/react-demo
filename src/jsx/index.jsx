import React from 'react';
import ReactDOM from 'react-dom';


require('../scss/styles.scss');

var HelloMessage = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(<HelloMessage name="John" />,
    document.getElementById('example'));
