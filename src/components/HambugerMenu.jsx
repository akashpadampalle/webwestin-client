import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import NavLinks from './NavLinks'
import style from '../assets/css/hamburgermenu.module.css'


const HambugerMenu = () => {

    const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <div className={style.container}>
        <GiHamburgerMenu onClick={ () => { setHamburgerState(!hamburgerState)}} className={style.icon}/>
        <NavLinks direction={'column'} display={hamburgerState} />
    </div>
  )
}

export default HambugerMenu