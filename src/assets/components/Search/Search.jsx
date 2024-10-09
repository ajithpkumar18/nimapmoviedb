import React, { useState } from 'react';
import "./styles.css";

const Search = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        { value && onSubmit(value) }
    };

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(value);
        }
        console.log(value);

    };

    return (
        <div className="search">
            <input
                type="text"
                name="search"
                value={value}
                onChange={handleChange}
                placeholder="Search for movies"
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
};

export default Search;
