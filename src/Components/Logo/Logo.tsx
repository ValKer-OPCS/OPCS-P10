import styles from './style.module.scss'
import logoImg from '../../Assets/argentBankLogo.webp'
import { NavLink } from 'react-router-dom';



const Logo = () => {
  return (
    <NavLink className={styles['main-nav-logo']} to="/">
    <img className={styles['main-nav-logo-image']} src={logoImg} alt="logo of the company"/>
    <h1 className={styles["sr-only"]}>Argent Bank</h1>
    </NavLink>
  )
};

export default Logo;
