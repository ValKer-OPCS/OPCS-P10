import Logo from "../../Components/Logo/Logo";
import { NavLink } from "react-router-dom";
import type { AppDispatch, RootState } from "../../main";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/authSlice";


import styles from './style.module.scss'

const Header = () => {

  const dispatch = useDispatch<AppDispatch>()

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const { user } = useSelector((state: RootState) => state.user)
  const firstName = user?.firstName

  const handlelogout = () => {
      dispatch(logout())

  }




  return (
    <header className={styles["main-nav"]}>
      <Logo />
      <nav>
        {!isAuthenticated || !firstName ? (
          <NavLink className={styles["main-nav-item"]} to="/signIn" onClick={handlelogout}>
            <i className="fa fa-user-circle"></i>
            &nbsp;Sign In
          </NavLink>
        ) : (
          <div className={styles["main-nav-user"]}>
            <NavLink to="/account" className={styles["main-nav-item"]}>
              <i className="fa fa-user-circle"></i>
              &nbsp;{firstName}&nbsp;
            </NavLink>
            

            <NavLink to="/" className={styles["main-nav-item"]} onClick={handlelogout}>
            <i className="fa fa-sign-out"></i>
              &nbsp;Sign Out
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
