import styles from './style.module.css'

type AccountCardProp = {
    title: string;
    amount: number;
    description: string;
};


const AccountCard = ({ title, amount, description }: AccountCardProp) => {
  return (
    <section className={styles["account"]}>
			<div className={styles["account-content-wrapper"]}>
				<h3 className={styles["account-title"]}>{title}</h3>
				<p className={styles["account-amount"]}>{amount.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
				<p className={styles["account-amount-description"]}>{description}</p>
			</div>
			<div className={styles["account-content-wrapper cta"]}>
				<button className={styles["transaction-button"]}>View transactions</button>
			</div>
		</section>
  )
};

export default AccountCard
