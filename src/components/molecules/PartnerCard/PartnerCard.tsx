import styles from './PartnerCard.module.scss'

interface PartnerCardProps {
    image?: string,
    name: string,
    companyName: string,
}

const PartnerCard = ({name, companyName, image}: PartnerCardProps) => {
    return (
        <div className={styles.card}>
            <div>
                <img src={image ?? 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
                     alt={"Partner Photo"}/>
                <div>
                    <h4>{name}</h4>
                    <p>{companyName}</p>
                </div>
            </div>
            <button>Setup a meeting</button>
        </div>
    )
}

export default PartnerCard