import React from 'react'
import {VscCircleLargeFilled} from 'react-icons/vsc'
import './HeaderTop.css'

const HeaderTop = () => {
  return (
    <div className='header-top'>
       <VscCircleLargeFilled color="red" className='header-top-icons'/>
       <VscCircleLargeFilled color='orange' className='header-top-icons'/>
       <VscCircleLargeFilled color='green' className='header-top-icons'/>
    </div>
  )
}

export default HeaderTop