import styles from './style.module.scss'

type TextFieldType = {
    id: string;
    variant: "input-wrapper" | "secondary";
    text: string;
    type: "password" | "email" | "text";
};


const TextField = ({id, variant, text, type } : TextFieldType) => {
  return (
    <div className={styles[variant]}>
		<label htmlFor={id}>{text}</label>
	    <input type={type} id={id}  />
	</div>
  )
};

export default TextField
