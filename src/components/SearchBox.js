import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
    <div className='form-group'>
        <input
            className='form-control' 
            type="search" 
            placeholder="search employees" 
            onChange={searchChange}
            />
    </div>
    );
}

export default SearchBox;