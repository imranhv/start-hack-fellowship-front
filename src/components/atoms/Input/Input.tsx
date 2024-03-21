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

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formattedValue = value
            .replace(/\D/g, '') // Remove non-numeric characters
            .replace(/^(\d{2})(\d)/, '$1-$2') // Add hyphen after the first two digits
            .replace(/^(\d{2}-\d{2})(\d)/, '$1-$2') // Add hyphen after the next two digits
            .slice(0, 10); // Limit to 10 characters (DD-MM-YYYY)

        onChange && onChange({ target: { value: formattedValue, name } }); // Pass formatted value to onChange
    };

    return (
        <div className={styles.div}>
            {label && <label>{label}</label>}
            <input placeholder={placeholder} className={`${styles.input} ${className}`} type={type} required={required}
                   onChange={type === 'custom-date' ? handleDateChange : onChange} value={defaultValue} name={name} onBlur={onBlur}/>
        </div>
    )
}

export default Input