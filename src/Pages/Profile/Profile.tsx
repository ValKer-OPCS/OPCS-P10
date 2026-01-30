import AccountCard from "../../Containers/AccountCard/AccountCard";
import Button from "../../Components/Button/Button";
import ModifyUserForm from "../../Containers/ModifyUserForm/ModifyUserForm";
import styles from './style.module.scss'

import { useSelector } from "react-redux";
import type { RootState } from "../../main";
import { useState } from "react";


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

const Profile = () => {

  const { user } = useSelector((state: RootState) => state.user)
  const fullName = user?.firstName + " " + user?.lastName + " !"

  const [visibleForm, setVisibleForm] = useState<boolean>(false)

  const handleCloseForm = () => setVisibleForm(false)

  return (
    <main className={styles["main"]}>
      <div className={styles["header"]}>
  {!visibleForm && (
    <>
      <h1>Welcome back<br />{fullName}</h1>
      <Button type="button" variant="edit-button" text="Edit Name" onClick={() => setVisibleForm(true)}/>
    </>
  )}

  {visibleForm && <ModifyUserForm onClose={handleCloseForm} />}
</div>
      <h2 className={styles["sr-only"]}>Accounts</h2>



    {accounts.map((account) => (
      <AccountCard key={account.title} title={account.title} amount={account.amount} description={account.description}/>
    ))}

    </main>
  )
};

export default Profile
