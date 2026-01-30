import Icon from '../../Components/Icon/Icon'
import styles from './style.module.scss'
import { Link, useParams } from 'react-router-dom'

type ErrorConfig = {
  title: string
  message: string
  icon?: string
}


const Error = () => {
  const { code } = useParams<{ code?: string }>()

  let errorConfig: ErrorConfig

  switch (code) {
    case '401':
      errorConfig = {
        title: 'ERROR 401',
        message: 'You are not authorized to access this page.',
        icon: 'error',
      }
      break

    case '403':
      errorConfig = {
        title: 'ERROR 403',
        message: 'Access to this resource is forbidden.',
        icon: 'error',
      }
      break

    case '500':
      errorConfig = {
        title: 'ERROR 500',
        message: 'An internal server error occurred.',
        icon: 'error',
      }
      break

    case '404':
    default:
      errorConfig = {
        title: 'ERROR 404',
        message: 'The page you requested does not exist !',
        icon: 'error',
      }
      break
  }

  return (
    <main className={styles.main}>
      <section className={styles.error}>
        <Icon name={errorConfig.icon ?? 'error'} />
        <h1>{errorConfig.title}</h1>
        <p>{errorConfig.message}</p>
        <Link className={styles.link} to="/">
          Click here to go back to the front page
        </Link>
      </section>
    </main>
  )
}

export default Error
