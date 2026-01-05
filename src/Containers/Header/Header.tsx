import Logo from "../../Components/Logo/Logo";
import { NavLink } from "react-router-dom";


import styles from './style.module.scss'

const Header = () => {
  return (
    <header className={styles["main-nav"]}>
      <Logo/>
      <div>
        <NavLink className={styles["main-nav-item"]} to="/signIn"> 
          <i className="fa fa-user-circle"></i>
          &nbsp;Sign In
        </NavLink>
      </div>
    </header>
  )
};

export default Header
