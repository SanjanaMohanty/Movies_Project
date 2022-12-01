import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IconContext } from 'react-icons';
import MovieContext from './Context/MovieContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IconContext.Provider value={{size:'2rem'}}>
      <MovieContext>
        <App/>
      </MovieContext>
    </IconContext.Provider>
);

