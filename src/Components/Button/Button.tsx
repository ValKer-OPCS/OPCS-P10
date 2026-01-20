import styles from './style.module.scss'

type ButtonType = {
    type: "button" | "submit" | "reset";
    variant: "sign-in-button" | "edit-button" | "transaction-button";
    text: string;
    disabled?: boolean
};


const Button = ({type, variant, text, disabled} : ButtonType) => {
  return (
   <button type={type} className={styles[variant]} disabled={disabled} > {text} </button>
  )
};

export default Button
