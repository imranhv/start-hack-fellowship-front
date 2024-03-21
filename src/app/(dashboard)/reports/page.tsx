import styles from './page.module.scss'
import {Metadata} from "next";
import Input from "@/components/atoms/Input/Input";

export const metadata: Metadata = {
    title: 'Reports | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const DashboardPage = () => {
    return (
        <main className={styles.main}>
            <h1>Track your startup journey</h1>
            <form>
                <ul>
                    <li>
                        <Input type={'text'} label={"Employee Count"}/>
                        <Input type={'text'} label={"Equity free investments"}/>
                        <Input type={'text'} label={"Revenue"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Net Cash Burn"}/>
                        <Input type={'text'} label={"Cost"}/>
                        <Input type={'text'} label={"Runway"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Monthly Active Users"}/>
                        <Input type={'text'} label={"Monthly App Downloads"}/>
                        <Input type={'text'} label={"Monthly Website Visits"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Customer Retention Rate"}/>
                        <Input type={'text'} label={"Advertisement Costs"}/>
                        <Input type={'text'} label={"Return on Investment"}/>
                    </li>
                </ul>
                <div className={styles.buttonWrapper}>
                    <button>Update</button>
                </div>
            </form>
        </main>
    )
}

export default DashboardPage