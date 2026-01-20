import styles from './style.module.scss'

type TextFieldType = {
    id: string;
    variant: "input-wrapper" | "username-change";
    text: string;
    type: "password" | "email" | "text";
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
};


const FormTextField = ({id, variant, text, type, value, onChange, disabled } : TextFieldType) => {
  return (
    <div className={styles[variant]}>
		<label htmlFor={id}>{text}</label>
	    <input type={type} id={id} value={value} onChange={onChange} disabled={disabled} />
	</div>
  )
};

export default FormTextField
