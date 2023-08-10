import BrandName from './BrandName'
import NavLinks from './NavLinks'
import style from '../assets/css/navbar.module.css'
import HambugerMenu from './HambugerMenu'

const Navbar = ({windowWidth}) => {

  return (
    <nav className={style.container}>
      <BrandName />
      { (windowWidth > 768) ? <NavLinks display={true} /> : <HambugerMenu /> }
    </nav>
  )
}

export default Navbar