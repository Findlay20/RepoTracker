import React, { useState } from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';

function Search () {
    
    const [searchValue, setSearchValue] = useState()
    const [searchResult, setSearchResult] = useState([]);
    const [errMessage, setErrMessage] = useState("");

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
        try {
            setErrMessage("")
            const gitData = (await axios.get(`https://api.github.com/users/${searchValue}/repos`)).data
            if (gitData.length === 0) {setErrMessage("User has no public repos")}
            console.log(gitData)
            setSearchResult(gitData)
        } catch (err) {
            console.warn(err)
            setErrMessage("User can't be found.")
        }

    }
 

    function showResult(searchResult) {
        return <div id="results">
                {searchResult.map((repo, i) => <Card className='result' key={i}>
                    <h2><a href={repo.html_url} target='_blank' >{repo.name}</a></h2>
                    <h3>Open issues: {repo.open_issues_count}</h3>
                    <h3>Stargazers: {repo.stargazers_count}</h3>
                    <h3>Forks: {repo.forks_count}</h3>
                </Card>)}
            </div>
    }

    return <>
        <div id="search">
            <h2>Search Section</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchBox">Github username: </label>
                <input type="text" id="searchBox" required placeholder='Enter Github name...' onChange={updateInput}/>
                <input type="submit" value="Search"/>
            </form>
            <p>{errMessage}</p>
        </div>
        {showResult(searchResult)}
    </>


    }


export default Search;


