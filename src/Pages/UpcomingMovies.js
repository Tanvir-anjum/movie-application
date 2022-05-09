import React, {useState, useEffect} from "react";
import {movieApi} from "../api/movieApi";
import {Link} from "react-router-dom";

/*import LinkButton from "../common/LinkButtonComponent";*/


function UpcomingMovies() {

// get table column
    const column = ["title", "original_title", "poster_path", "overview", "popularity", "release_date"];

    // get table heading data
    const ThData = () => {

        return column.map((data) => {
            return <th key={data}>{data}</th>
        })
    }

// get table row data
    const tdData = () => {

        return listInfo.results.map((data) => {
            return (
                <tr>
                    {
                        column.map((v) => {
                            if (v == 'poster_path') {
                                return <td><img src={'https://image.tmdb.org/t/p/original' + data[v]} height={"100px"}
                                                alt={data['title']}/></td>

                            } else if (v == 'title' && !data[v]) {
                                return <td>{data['name']}</td>
                            } else if (v == 'release_date' && !data[v]) {
                                return <td>{data['first_air_date']}</td>
                            } else {
                                return <td>{data[v]}</td>
                            }
                        })
                    }
                </tr>
            )
        })
    }
    useEffect(() => {

        handleSearch(1);

    }, []);

    const [listInfo, setListInfo] = useState({
        results: [],
        total_results: 0,
        total_pages: 0,
        page: 0
    })

    const handleSearch = (page) => {
        console.log("handleSearch => ", {listInfo});

        movieApi.getUpcomingMovie(page)
            .then(res => setListInfo(prevState => {
                console.log(res.data)
                return {
                    ...prevState,
                    ...res.data
                }

            }))

            .catch(err => "Error")


    };
    const loadNextData = () => {
        if (listInfo.page < listInfo.total_pages) {

            let reqPageNumber = listInfo.page + 1;
            handleSearch(reqPageNumber)
        }
    };

    const loadPreviousData = () => {
        if (listInfo.page > 1) {

            let reqPageNumber = listInfo.page - 1;
            handleSearch(reqPageNumber)
        }

    }
    return (
        <>
            <Link to="/">
                <button type="button">
                    Home
                </button>
            </Link>

            <table className="table">
                <thead>
                <tr>{ThData()}</tr>
                </thead>
                <tbody>
                {tdData()}
                </tbody>
            </table>
            <div>
                <span><a onClick={loadPreviousData}
                         style={{cursor: "pointer", padding: "10px", alignment: "center"}}> Previous</a></span>
                <span><a onClick={loadNextData} style={{cursor: "pointer", padding: "10px"}}>Next</a></span>
            </div>
        </>
    )
}

export default UpcomingMovies;