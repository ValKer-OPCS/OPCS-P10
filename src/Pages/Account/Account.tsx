import AccountCard from "../../Containers/AccountCard/AccountCard";
import Button from "../../Components/Button/Button";
import styles from './style.module.scss'


type Account = {
  title: string;
  amount: number;
  description: string;
};

const accounts: Account[] = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: 2082.79,
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: 10928.42,
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: 184.3,
    description: "Current Balance",
  },
];

const Account = () => {
  return (
    <main className={styles["main"]}>
      <div className={styles["header"]}>
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <Button type="button" variant="edit-button" text="Edit Name" />
      </div>
      <h2 className={styles["sr-only"]}>Accounts</h2>



    {accounts.map((account) => (
      <AccountCard key={account.title} title={account.title} amount={account.amount} description={account.description}/>
    ))}

    </main>
  )
};

export default Account
