import styles from './page.module.scss'
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Reports | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const DashboardPage = () => {
    return (
        <main className={styles.main}>
            <h1>Track your startup journey</h1>
        </main>
    )
}

export default DashboardPage