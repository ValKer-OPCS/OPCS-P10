import AccountCard from "../../Components/AccountCard/AccountCard";
import styles from './style.module.scss'

const Account = () => {
  return (
    <main className={styles["main"]}>
      <div className={styles["header"]}>
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className={styles["edit-button"]}>Edit Name</button>
      </div>
      <h2 className={styles["sr-only"]}>Accounts</h2>



      <AccountCard title='Argent Bank Checking (x8349)' amount={2082.79} description="Available Balance"/>
      <AccountCard title='Argent Bank Savings (x6712)' amount={10928.42} description="Available Balance"/>
      <AccountCard title='Argent Bank Credit Card (x8349)' amount={184.30} description="Current Balance"/>
    </main>
  )
};

export default Account
