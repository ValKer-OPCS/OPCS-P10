import styles from './style.module.scss'

type CheckboxType = {
  id: string
  variant: "input-remember" | "secondary"
  text: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox = ({ id, variant, text, checked, onChange }: CheckboxType) => {
  return (
    <div className={styles[variant]}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

export default Checkbox
