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
        <h1 className='heading2'>Movie Details:</h1>
        <div className='container'>
            <div className='poster'>
                <img src={moviedetails.Poster} alt={moviedetails.Title}></img>
            </div>
            <div className='details'>
                <h3>Title: {moviedetails.Title}</h3>
                <h3>Year: {moviedetails.Year}</h3>
                <h3>Rating: {moviedetails.imdbRating}</h3>
                <p><b>Description:</b> {moviedetails.Plot}</p>
            </div>
        </div>
        
    </div>
);
}

export default MovieDetails;

