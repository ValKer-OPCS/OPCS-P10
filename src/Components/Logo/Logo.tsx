import styles from './style.module.scss'
import logoImg from '../../Assets/argentBankLogo.webp'
import logoImgMini from '../../assets/argentBankLogomini.webp'
import { NavLink } from 'react-router-dom';



const Logo = () => {
  return (
    <NavLink className={styles['main-nav-logo']} to="/">
     <picture>
        <source
          srcSet={logoImgMini}
          media="(max-width: 480px)"
        />
        <img
          className={styles['main-nav-logo-image']}
          src={logoImg}
          alt="logo of the company"
        />
      </picture>
    <h1 className={styles["sr-only"]}>Argent Bank</h1>
    </NavLink>
  )
};

export default Logo;
