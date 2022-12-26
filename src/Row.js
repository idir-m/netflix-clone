import React, { useEffect, useState } from 'react'
import axios from './axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow }) {
  
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
     if (trailerUrl) {
        setTrailerUrl('')
     }else{

      const movieName = movie?.title || movie?.name || movie?.original_name;
      

      movieTrailer(movieName, {id: true}).then(
        youtubeId => setTrailerUrl(youtubeId)
      ).catch(err => console.log(err))
      
     }
  }

  useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchUrl);
            
            setMovies(response.data.results)
            return response;
        }
        fetchData();

  }, [fetchUrl])

  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
            {movies.map(movie => (
              movie.backdrop_path ?
                <img key={movie.id} 
                     onClick={() => handleClick(movie)}
                     className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                     src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie?.backdrop_path}`} 
                     alt={movie.name}
                     title="Click for trailer" />
                     :
                     <span key={movie.id}></span>
            ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row