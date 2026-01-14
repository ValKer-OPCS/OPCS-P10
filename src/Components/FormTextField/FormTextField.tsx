import styles from './style.module.scss'

type TextFieldType = {
    id: string;
    variant: "input-wrapper" | "secondary";
    text: string;
    type: "password" | "email" | "text";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const FormTextField = ({id, variant, text, type, value, onChange } : TextFieldType) => {
  return (
    <div className={styles[variant]}>
		<label htmlFor={id}>{text}</label>
	    <input type={type} id={id} value={value} onChange={onChange} />
	</div>
  )
};

export default FormTextField
