import styles from './KPICard.module.scss'

interface KPICardProps {
    label: string,
    value: string
}

const KPICard = ({label, value}: KPICardProps) => {
    return(
        <div className={styles.card}>
            <h4>{label}</h4>
            <p>{value} $</p>
        </div>
    )
}

export default KPICard