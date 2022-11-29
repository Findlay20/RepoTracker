import React, { useState } from 'react';

function Search () {
    
    const [searchValue, setSearchValue] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        // getResult(searchValue);
        document.getElementById('searchBox').value = "";
    }
    
    const updateInput = e => {
        const input = e.target.value 
        setSearchValue(input)
    }

    return <div id="search">
        <h1>Search Section</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" id="searchBox" required placeholder='Enter Github name...' onChange={updateInput}/>
            <input type="submit" value="Search"/>
        </form>
    </div>
}

export default Search;