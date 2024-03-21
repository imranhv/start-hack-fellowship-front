import React from 'react';
import styles from './Select.module.scss'

interface SelectProps {
    name: string,
    className?: string,
    placeholder?: string,
    options: Array<{ label: string, value: string }>,
    selectedOption: string | null,
    setSelectedOption: (params: string) => void,
    label?: string
}

const Select = ({
                    placeholder = "Select an option",
                    options,
                    name,
                    className,
                    selectedOption,
                    setSelectedOption,
                    label
                }: SelectProps) => {
    const ref = React.useRef<HTMLInputElement | null>(null)

    return (
        <div className={styles.selectWrapper}>
            {label && <label>{label}</label>}
            <div className={`${styles.select} ${className}`}
                 onClick={() => ref.current ? ref.current.checked = !ref.current.checked : null}>
                <input ref={ref} type="checkbox" id={`select-toggle-${name}`} hidden/>
                <label htmlFor={`select-toggle-${name}`}>{selectedOption ?? placeholder}</label>
                <ul>
                    {options.map((option) => (
                        <li key={option.value} onClick={() => setSelectedOption(option.value)}
                            className={selectedOption === option.value ? styles.selected : undefined}>{option.label}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Select;