import React from 'react';
import { Header, Search } from './components';

function App() {
    return (
        <div id="app" className='bg-dark text-white'>
            <Header />
            <main>
                <Search />
            </main>
        </div>
    )
}

export default App;