import styles from './style.module.scss'

type ButtonType = {
    type: "button" | "submit" | "reset";
    variant: "sign-in-button" | "edit-button" | "transaction-button";
    text: string;
};


const Button = ({type, variant, text} : ButtonType) => {
  return (
   <button type={type} className={styles[variant]}> {text} </button>
  )
};

export default Button
