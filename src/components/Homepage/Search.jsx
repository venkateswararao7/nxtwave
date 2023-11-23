import React from 'react'
import "../Homepage/search.css";
import SearchIcon from '@mui/icons-material/Search';
function Search() {
    return (
        <div className='search-container'>
            <div className='search'>
                <SearchIcon />
                <p>
                    Search
                </p>
            </div>
        </div>
    )
}

export default Search