import React from 'react'
import logo from '../assets/img/webwestin-logo.png'
import style from '../assets/css/brandname.module.css'
import { brandColor } from '../assets/colors'

const BrandName = () => {
  return (
    <div className={style.container}>
        <img src={logo} className={style.logo}/>
        <span className={style.name} style={{color: brandColor}}>Webwestin</span>
    </div>
  )
}

export default BrandName