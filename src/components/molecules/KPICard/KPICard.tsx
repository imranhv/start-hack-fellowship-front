import styles from './KPICard.module.scss'

interface KPICardProps {
    label: string,
    value: number,
    previousValue: number,
}

const KPICard = ({label, value, previousValue}: KPICardProps) => {
    let kpiDelta = undefined

    if (value !== undefined) {
        kpiDelta = value * 100 / previousValue - 100
    }

    return(
        <div className={styles.card}>
            <h4>{label}</h4>
            <p>{value}</p>
            {kpiDelta !== undefined && <span className={kpiDelta === 0 ? '' : kpiDelta > 0 ? styles.green : styles.red}>{`${kpiDelta > 0 ? "+" : ""}${kpiDelta!.toFixed(1)} % from last month`}</span>}
        </div>
    )
}

export default KPICard