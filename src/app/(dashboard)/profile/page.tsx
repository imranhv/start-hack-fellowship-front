import styles from './page.module.scss'
import Input from "@/components/atoms/Input/Input";

const ProfiledPage = () => {
    return(
        <main className={styles.main}>
            <h1>Profile</h1>
            <form>
                <ul>
                    <li>
                        <Input type={'text'} label={"Name"}/>
                        <Input type={'text'} label={"Surname"}/>
                        <Input type={'text'} label={"Birthday"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Email"}/>
                        <Input type={'text'} label={"Phone number"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"University"}/>
                        <Input type={'text'} label={"Field of study"}/>
                        <Input type={'text'} label={"Education level"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Address"}/>
                        <Input type={'text'} label={"City"}/>
                        <Input type={'text'} label={"Country"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Startup role"}/>
                    </li>
                </ul>
                <div className={styles.buttonWrapper}>
                    <button>Update</button>
                </div>
            </form>
        </main>
    )
}

export default ProfiledPage