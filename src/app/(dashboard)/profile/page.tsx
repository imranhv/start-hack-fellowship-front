"use client"

import styles from './page.module.scss'
import Input from "@/components/atoms/Input/Input";

import useUser from "@/hooks/useUser";
import Spinner from "@/components/organisms/Spinner/Spinner";
import convertDate from "@/utils/dateConverter";

// export const metadata: Metadata = {
//     title: 'Profile | Start Fellowship Dashboard',
//     description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
// }

const ProfilePage = () => {
    const {user, loading} = useUser({redirectTo: "/login"})

    console.log(user)

    return(
        <main className={styles.main}>
            <h1>Profile</h1>
            {loading && <Spinner />}
            {user && <form>
                <ul>
                    <li>
                        <Input type={'text'} defaultValue={user.name} label={"Name"}/>
                        <Input type={'text'} defaultValue={user.surname} label={"Surname"}/>
                        <Input type={'text'} defaultValue={convertDate(user.birthday)} label={"Birthday"}/>
                    </li>
                    <li>
                        <Input type={'text'} defaultValue={user.email} label={"Email"}/>
                        <Input type={'text'} defaultValue={user.telephone} label={"Phone number"}/>
                    </li>
                    <li>
                        <Input type={'text'} defaultValue={user.university_name} label={"University"}/>
                        <Input type={'text'} defaultValue={user.major} label={"Field of study"}/>
                        <Input type={'text'} defaultValue={user.student_level} label={"Education level"}/>
                    </li>
                    <li>
                        <Input type={'text'} defaultValue={user.address} label={"Address"}/>
                        <Input type={'text'} defaultValue={user.city} label={"City"}/>
                        <Input type={'text'} defaultValue={user.country} label={"Country"}/>
                    </li>
                    <li>
                        <Input type={'text'} label={"Startup role"}/>
                    </li>
                </ul>
                <div className={styles.buttonWrapper}>
                    <button>Update</button>
                </div>
            </form>}
        </main>
    )
}

export default ProfilePage