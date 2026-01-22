import styles from './style.module.scss'

type ButtonType = {
    type: "button" | "submit" | "reset";
    variant: "sign-in-button" | "edit-button" | "transaction-button";
    text: string;
    disabled?: boolean
    onClick? : () => void
};


const Button = ({type, variant, text, disabled, onClick} : ButtonType) => {
  return (
   <button type={type} className={styles[variant]} disabled={disabled} onClick={onClick} > {text} </button>
  )
};

export default Button
