import axios from 'axios';
import React, { useEffect } from 'react'
import { useData } from '../../Context/MovieContext';
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay';

const AllMovies = () => {

  const {dispatch} = useData()

  const fetchData = async () =>{
    const response = await axios("https://wookie.codesubmit.io/movies",{
                                  headers:{
                                    'Authorization' : "Bearer Wookie2019"
                                  }
                                });
    dispatch({type:"storeMovies",
              payload:response.data.movies})  
 }
  
  useEffect(() => {
      fetchData()
  },[])

  return (
    <div>
       <MoviesDisplay/>
    </div>
  )
}

export default AllMovies