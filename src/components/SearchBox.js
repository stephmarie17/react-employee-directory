import React from 'react';

const SearchBox = ({searchfield, searchChange, name}) => {
    return (
    <div className='form-group'>
        <input
            name={name}
            className='form-control' 
            type="search" 
            placeholder="search employees" 
            onChange={searchChange}
            />
    </div>
    );
}

export default SearchBox;