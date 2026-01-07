import Icon from '../../Components/Icon/Icon';
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className={styles["main"]}>
			<section className={styles["error"]}>
				<Icon name='error'/>
				<h1>ERROR 404</h1>
        <p>The page you requested does not exist !</p>
        <Link className={styles["link"]} to="/">Click here to go back to the front page</Link>
			</section>
		</main>
  )
};

export default Error
