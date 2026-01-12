
import styles from './style.module.scss'

type CheckboxType = {
    id: string;
    variant: "input-remember" | "secondary";
    text: string;
};


const Checkbox = ({id, variant, text} : CheckboxType) => {
  return (
    <div className={styles[variant]}>
		<input type="checkbox" id={id}  />
		<label htmlFor={id}>{text}</label>
	</div>
  )
};

export default Checkbox
