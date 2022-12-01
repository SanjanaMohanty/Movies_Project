import React from 'react'
import { useData } from '../../../Context/MovieContext'
import './Genre.css'

const Genre = ({genre}) => {

  const {movieData:{allMovies},search} = useData()
  
  const searchFilter= () => search ?
                       allMovies.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                       : allMovies
  
  const filterGenre = genre => searchFilter().filter(item => item.genres.includes(genre))
  

  return (
    <>
     <div className='genre'>
       <div><h2>Genre:{genre}</h2></div>
       <div>
         {
           filterGenre(genre).map(item => {
                 const {id,backdrop,title} = item
            return <div key={id} className='genre-movie'>
                     <div><img src={backdrop} alt="movieImage"></img></div>
                     <div><h3>{title}</h3></div>
                     
                   </div> 
                          })
         }  
       </div> 
    </div>
    <hr/>
    </>
  )
}

export default Genre