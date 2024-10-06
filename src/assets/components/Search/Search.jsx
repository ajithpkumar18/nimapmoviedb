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
            onSubmit(value);  // Call onSubmit prop when the user clicks the search button
        }
        console.log(value);

    };

    return (
        <div className="search">
            <input
                type="text"
                name="search"
                value={value}
                onChange={handleChange}  // Pass the event to handleChange
                placeholder="Search for movies"
            />
            <button onClick={handleSubmit}>Search</button> {/* Trigger the search on click */}
        </div>
    );
};

export default Search;
