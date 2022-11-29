import React, { useState } from 'react';
import axios from 'axios';

function Search () {
    
    const [searchValue, setSearchValue] = useState()
    const [searchResult, setSearchResult] = useState();

    const handleSubmit = e => {
        e.preventDefault()
        getRepositories(searchValue);
        document.getElementById('searchBox').value = "";
    }
    
    const updateInput = e => {
        const input = e.target.value 
        setSearchValue(input)
    }

    async function getRepositories(searchValue) {
        const gitData = (await axios.get(`https://api.github.com/users/${searchValue}/repos`)).data
        console.log(gitData)
        setSearchResult(gitData)
    }
 
    if (searchResult) {
        console.log(searchResult)
        return <div id="results">
                {searchResult.forEach(repo => <div className='result'>
                <h1><a href={repo.url}>{repo.name}</a></h1>
                <h3>Open issues: {repo.open_issues_count}</h3>
                <h3>Stargazers: {repo.stargazers_count}</h3>
                <h3>Forks: {repo.forks_count}</h3>
                </div>)}
            </div>
    } else {
    return <div id="search">
                <h1>Search Section</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="searchBox">Github username: </label>
                    <input type="text" id="searchBox" required placeholder='Enter Github name...' onChange={updateInput}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
    }
}


export default Search;


