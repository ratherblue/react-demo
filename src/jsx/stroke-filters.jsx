import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                <label>
                    <input name="courseType" type="radio" value="short"
                            checked={this.props.data.courseType === 'short'}
                            onChange={this.props.onChange} />Short Course
                </label>
                <label>
                    <input name="courseType" type="radio" value="long"
                            checked={this.props.data.courseType === 'long'}
                            onChange={this.props.onChange} />Long Course
                </label>
            </div>
        );
    }
});
