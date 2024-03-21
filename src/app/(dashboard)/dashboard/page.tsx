import styles from './page.module.scss'
import {Metadata} from "next";
import KPICard from "@/components/molecules/KPICard/KPICard";

export const metadata: Metadata = {
    title: 'Home | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const DashboardPage = () => {
    return(
        <main>
            <main className={styles.main}>
                <h1>Welcome back, User</h1>
                <section className={styles.graphs}>

                </section>
                <section className={styles.kpi}>
                    {Array(6).fill(0).map((kpi, index) => (
                        <KPICard key={index} label={"Total Revenue"} value={"100"} />
                    ))}
                </section>
            </main>
        </main>
    )
}

export default DashboardPage