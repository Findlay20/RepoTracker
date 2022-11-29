import React from 'react';

function Search () {
    
    const [searchValue, setSearchValue] = useState()


    
    return <div id="search">
        <h1>Search Section</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" id="searchBox" required placeholder='Enter Github name...'/>
            <input type="submit" value="Search"/>
        </form>
    </div>
}

export default Search;