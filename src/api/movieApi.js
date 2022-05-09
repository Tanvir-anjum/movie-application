import axios, * as others from 'axios';


export const movieApi = {
    getMovieList,
    getUpcomingMovie,
    getTopMovie

};

function getMovieList(page) {

 return axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=275960a7fb640b2255136ae2bfb58d5f&page='+page)

};

function getUpcomingMovie(page) {

    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=275960a7fb640b2255136ae2bfb58d5f&page='+page)

};

function getTopMovie(page) {

    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=275960a7fb640b2255136ae2bfb58d5f&page='+page)

};



