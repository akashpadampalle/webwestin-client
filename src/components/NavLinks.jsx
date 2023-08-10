import React from 'react'
import style from '../assets/css/navlinks.module.css'
import {} from '../assets/colors'

const NavLinks = ({direction, display}) => {

  

  return (
    /** 
     * if direction is columen -> parent will be absolue and child placed verticaly
     * if display is false -> hide the hamberger menu list 
    */
    <div 
    className={`
    ${style.container} 
    ${(direction === 'column' ? style.dColumn : '')}
    ${(display) ? ''  : style.dNone }`}>
        <a className={style.navLinks} href="">About Company</a>
        <a className={style.navLinks} href="">Skill Development Courses</a>
        <a className={style.navLinks} href="">MHE speaking</a>
        <a className={style.navLinks} href="">Startup ideas</a>
        <a className={style.navLinks} href="">Streamline Education</a>
    </div>
  )
}

export default NavLinks