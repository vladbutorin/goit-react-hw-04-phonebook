import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const { value, onChange, title } = this.props;
        return (
            <label>
                <div>{title}</div>
                <input type="text" value={value} onChange={onChange} />
            </label>
        );
    }
}

export default Filter;