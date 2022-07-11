
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Daoism</code> 
        </p>
        
        <a
          className="App-link"
          href="https://daoistgate.com/how-to-follow-the-dao-without-a-master/"
          target="_blank"
          rel="noopener noreferrer"
        
        >
          Learn The Dao
        </a>
         <Button variant="contained"
         href="https://www.britannica.com/topic/Daoism"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          >Beginning of Dao</Button>
      </header>
    </div>
  );
}

export default App;
