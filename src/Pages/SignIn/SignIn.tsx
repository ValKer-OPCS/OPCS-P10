
import styles from './style.module.scss'

import LoginForm from '../../Containers/LoginForm/LoginForm';


const SignIn = () => {
  return (
    <main className={styles["main"]}>
			<section className={styles["sign-in-content"]}>
				<i className="fa fa-user-circle {styles[sign-in-icon]}"></i>
				<h1>Sign In</h1>
			
			<LoginForm/>
			</section>
		</main>
  )
};

export default SignIn
