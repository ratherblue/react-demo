import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                <label>
                    <input name="courseType" type="radio" checked={this.props.data.courseType === 'short'}
                            value="short" onChange={this.props.onChange} />Short Course
                </label>
                <label>
                    <input name="courseType" type="radio" checked={this.props.data.courseType === 'long'}
                            value="long" onChange={this.props.onChange} />Long Course
                </label>
            </div>
        );
    }
});
