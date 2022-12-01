import React from 'react'
import Genre from './Genre/Genre'
import './MoviesDisplay.css'

const MoviesDisplay = () => {

   const genres = ['Action','Crime','Drama','Biography','History',
                   'Animation','Adventure','Sci-Fi','Romance',
                   'Family','Thriller','War','Mystery']

  return (
    <div>
      {
         genres.map((genre,index) => <React.Fragment key={index}>
                                       <Genre genre={genre}/>
                                      </React.Fragment>)
      }
    </div>
  )
}

export default MoviesDisplay