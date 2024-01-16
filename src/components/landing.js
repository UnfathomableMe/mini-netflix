import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './../App.scss'

const Landing = (props) =>{
    
    return(
            <div className='image-grid image-container'>
                {props.movielist.map((movie, index)=>(
                    <div key={index}>
                        <Link to={`/${movie.imdbID}`}>
                        <img src={movie.Poster} alt={movie.Title}></img>
                        </Link>
                        <div className='title'>{movie.Title}</div>
                    </div>
                ))}
            </div>
    )
}

export default Landing;