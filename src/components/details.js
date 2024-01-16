import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails= () =>{
const { imdbID } = useParams();
const [moviedetails, setmoviedetails] = useState({});

const fetchdetails = async () => {
    const omdb_api = `http://www.omdbapi.com/?i=${imdbID}&apikey=4845c445`;

    const response = await fetch(omdb_api);
    const convertToJSON = await response.json();
  
    setmoviedetails(convertToJSON);
};
useEffect(() => {
    fetchdetails();
},[imdbID]);

return(
    <div>
        <h2>Movie Details:</h2>
        <img src={moviedetails.Poster} alt={moviedetails.Title}></img>
        <p>Title: {moviedetails.Title}</p>
        <p>Year: {moviedetails.Year}</p>
        <p>Rating: {moviedetails.imdbRating}</p>
    </div>
);
}

export default MovieDetails;