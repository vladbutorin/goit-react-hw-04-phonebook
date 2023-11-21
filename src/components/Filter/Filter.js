import React from 'react';

const Filter = ({ value, onChange, title }) => {
    return (
        <label>
            <div>{title}</div>
            <input type="text" value={value} onChange={onChange} />
        </label>
    );
};

export default Filter;