
import styles from './style.module.scss'



const SignIn = () => {
  return (
    <main className={styles["main"]}>
			<section className={styles["sign-in-content"]}>
				<i className="fa fa-user-circle {styles[sign-in-icon]}"></i>
				<h1>Sign In</h1>
				<form>
					<div className={styles["input-wrapper"]}>
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className={styles["input-wrapper"]}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password"  />
					</div>
					<div className={styles["input-remember"]}>
						<input type="checkbox" id="remember-me"  />
						<label htmlFor="remember-me">Remember me</label>
					</div>

					<button type="submit" className={styles["sign-in-button"]}>
						Sign In
					</button>
				</form>
			</section>
		</main>
  )
};

export default SignIn
