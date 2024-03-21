import styles from './Input.module.scss'

interface InputProps {
    label?: string
    placeholder?: string
    className?: string,
    type: string,
    required?: boolean
    onChange?: (params: any) => void
    defaultValue?: string
    name?: string
    onBlur?: (params: any) => void
}

const Input = ({
                   label,
                   placeholder = "",
                   className,
                   type,
                   required = false,
                   onChange,
                   defaultValue,
                   name,
                   onBlur
               }: InputProps) => {
    return (
        <div className={styles.div}>
            {label && <label>{label}</label>}
            <input placeholder={placeholder} className={`${styles.input} ${className}`} type={type} required={required}
                   onChange={onChange} value={defaultValue} name={name} onBlur={onBlur}/>
        </div>
    )
}

export default Input