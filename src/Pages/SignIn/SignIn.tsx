
import styles from './style.module.scss'

import Form from '../../Containers/Form/Form';


const SignIn = () => {
  return (
    <main className={styles["main"]}>
			<section className={styles["sign-in-content"]}>
				<i className="fa fa-user-circle {styles[sign-in-icon]}"></i>
				<h1>Sign In</h1>
			
			<Form/>
			</section>
		</main>
  )
};

export default SignIn
