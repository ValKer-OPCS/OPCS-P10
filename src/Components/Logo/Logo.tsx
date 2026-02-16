import styles from './style.module.scss'
import { NavLink } from 'react-router-dom';

interface LogoProps {
  fullSize: string;
  miniSize: string;
}


const Logo = ({ fullSize, miniSize }: LogoProps) => {
  return (
    <NavLink className={styles['main-nav-logo']} to="/">
     <picture>
        <source srcSet={miniSize} media="(max-width: 480px)" />
        <img className={styles['main-nav-logo-image']} src={fullSize} alt="logo of the company" />
      </picture>
    <h1 className={styles["sr-only"]}>Argent Bank</h1>
    </NavLink>
  )
};

export default Logo;
