import styles from './page.module.scss'
import {Metadata} from "next";
import Input from "@/components/atoms/Input/Input";

export const metadata: Metadata = {
    title: 'My Startup | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const StartupPage = () => {
    return (
        <main className={styles.main}>
            <h1>About My Startup</h1>
            <form>
                <ul>
                    <li>
                        <Input type={'text'} label={"Name"}/>
                        <Input type={'text'} label={"Field of operation"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"About"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Motivation"}/>
                        <Input type={'text'} label={"Potential"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Number of co-founders"}/>
                        <Input type={'text'} label={"Co-founders"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Business Model"}/>
                        <Input type={'text'} label={"Founding Stage"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Headquarters"}/>
                        <Input type={'text'} label={"Employee Count"}/>
                        <Input type={'text'} label={"Total Founding"}/>
                    </li>
                </ul>
                <div className={styles.buttonWrapper}>
                    <button>Update</button>
                </div>
            </form>
        </main>
    )
}

export default StartupPage