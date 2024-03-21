import styles from './page.module.scss'
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Home | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const DashboardPage = () => {
    return(
        <main>
            <main className={styles.main}>
                <h1>Welcome back, User</h1>
            </main>
        </main>
    )
}

export default DashboardPage