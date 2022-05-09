import React from 'react'
import App from "../App"
import {Link} from "react-router-dom";
import '../App.css';


const Main = () => {


    return (
        <>

            <h1 style={{paddingLeft: "10px"}}>Movie App!</h1>

            <Link to="/home">
                <button type="button" style={{cursor: "pointer", margin: "10px", padding: "10px", alignment: "center"}}>
                    Trending Movies
                </button>
            </Link>
            <Link to="/upcomingMovies">
                <button type="button" style={{cursor: "pointer", margin: "10px", padding: "10px", alignment: "center"}}>
                    Upcoming Movies
                </button>
            </Link>
            <Link to="/topRated">
                <button type="button" style={{cursor: "pointer", margin: "10px", padding: "10px", alignment: "center"}}>
                    Top Rated Movies
                </button>
            </Link>
        </>
    )
}

export default Main