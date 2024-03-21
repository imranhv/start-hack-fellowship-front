import styles from './PartnerCard.module.scss'
import Tag from "@/components/atoms/Tag/Tag";

interface PartnerCardProps {
    image?: string,
    name: string,
    companyName: string,
}

const PartnerCard = ({name, companyName, image}: PartnerCardProps) => {
    return (
        <div className={styles.card}>
            <div>
                <div>
                    <img src={image ?? 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
                         alt={"Partner Photo"}/>
                    <h4>{name}</h4>
                    <p>{companyName}</p>
                </div>
            </div>
            <div>
                <div>
                    {Array(5).fill(0).map((tag, index) => (
                        <Tag key={index} label={"tag"}/>
                    ))}
                </div>
                <button>Setup a meeting</button>
            </div>
        </div>
    )
}

export default PartnerCard