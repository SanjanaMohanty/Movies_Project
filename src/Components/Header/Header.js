import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import { GrSearch } from 'react-icons/gr'
import './Header.css'
import { useData } from '../../Context/MovieContext'

const Header = () => {

   const {setSearch} = useData()
   
  return (
    <div>
      <HeaderTop/>
      <div className='header'>
         <div>
           <div>WOOKIE</div>
           <div>MOVIES</div>
         </div>
         <div>
           <div><GrSearch/></div>
           <div><input type="text" onChange={(e) => setSearch(e.target.value)}/></div>
         </div>
      </div>
    </div>
  )
}

export default Header