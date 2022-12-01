import { createContext, useContext, useReducer, useState } from "react";
import { movieReducer } from "./movieReducer";

const Data = createContext()
export const useData = () => useContext(Data) 

const MovieContext = ({children}) => {
  
  const initialState = {
     allMovies:[]
  }
  const [movieData,dispatch] = useReducer(movieReducer,initialState)
  const [search,setSearch] = useState("")

 
  return (
     <Data.Provider value={{movieData,dispatch,setSearch,search}}>
          {children}
     </Data.Provider>
  )
}

export default MovieContext