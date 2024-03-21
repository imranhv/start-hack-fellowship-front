import styles from './page.module.scss'
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'My Startup | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const StartupPage = () => {
    return (
        <main className={styles.main}>
            <h1>About My Startup</h1>
        </main>
    )
}

export default StartupPage