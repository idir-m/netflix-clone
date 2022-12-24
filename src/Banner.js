import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {

  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
        const response = await axios.get(requests.fetchNetflixOriginals)

        
        setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length -1)])
       

        return response;
    }
    fetchData();
  }, [])

  function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }


  return (
    <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage : `url(
                    https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
                )`,
                backgroundPosition: "center center",
            }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>{
                movie?.title || movie?.name || movie?.original_name
            }</h1>
            <div className='banner__btns'>
                <button className='banner__btn'>Play</button>
                <button className='banner__2btn'>More info</button>
            </div>
            

            <p className='banner__description'>{truncate(movie?.overview, 150)}</p>
        </div>

        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner