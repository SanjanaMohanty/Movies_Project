export const movieReducer = (state,{type,payload}) => {
  switch(type){
    case "storeMovies":
      return {...state,allMovies:payload}
    default:
      return state.allMovies
  }
}