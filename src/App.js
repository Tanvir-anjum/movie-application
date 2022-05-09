import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import TopRated from './Pages/TopRated'
import UpcomingMovies from "./Pages/UpcomingMovies";
import Main from "./Pages/Main";

function App() {
    return (
        <Routes>

            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/upcomingMovies" element={<UpcomingMovies/>}/>
            <Route exact path="/topRated" element={<TopRated/>}/>

        </Routes>

    );
}

export default App;
