const searchReducer = (state,{type,payload}) => {
   switch(type)
   {
    case 'filter_movie':
      return {...state,search:payload.toLowerCase()}
    default:
      return state.search
   }
}
export default searchReducer