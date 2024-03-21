"use client"

import styles from './page.module.scss'
import {Metadata} from "next";
import Input from "@/components/atoms/Input/Input";
import Spinner from "@/components/organisms/Spinner/Spinner";
import useUser from "@/hooks/useUser";
import {getStartupInfo} from "@/api/startupAPI";
import React from "react";

// export const metadata: Metadata = {
//     title: 'My Startup | Start Fellowship Dashboard',
//     description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
// }

const StartupPage = () => {
    const {user, loading} = useUser({redirectTo: "/login"})
    const [startupData, setStartupData] = React.useState<any>()

    React.useEffect(() => {
        if (user) {
            getStartupInfo(user.startUpCompanyId).then(result => {
                if (result)
                    setStartupData(result)
            })
        }
    }, [user])

    console.log(startupData)

    return (
        <main className={styles.main}>
            <h1>About My Startup</h1>
            {loading && <Spinner/>}
            {user && startupData && <form>
                <ul>
                    <li>
                        <Input type={'text'} defaultValue={startupData.name} label={"Name"}/>
                        <Input type={'text'} defaultValue={startupData.industry} label={"Field of operation"}/>
                    </li>
                    <li>
                        <Input type={'text'} defaultValue={startupData.description} label={"About"}/>
                    </li>
                    <li>
                        <Input type={'text'} defaultValue={user.motivation_letter} label={"Motivation"}/>
                        <Input type={'text'} defaultValue={user.reason_to_fs} label={"Potential"}/>
                    </li>
                    <li>
                        <Input type={'text'} defaultValue={startupData.startup_users.length} label={"Number of co-founders"}/>
                        <Input type={'text'} defaultValue={startupData.startup_users.map((user: any) => `${user.name} ${user.surname}`).join(", ")} label={"Co-founders"}/>
                    </li>
                    <li>
                        <Input type={'text'} defaultValue={startupData.business_model} label={"Business Model"}/>
                        <Input type={'text'} defaultValue={startupData.founding_stage} label={"Founding Stage"}/>
                    </li>
                    <li>
                        <Input type={'text'} defaultValue={startupData.hq_country} label={"Headquarters"}/>
                        <Input type={'text'} defaultValue={startupData.current_employee_count} label={"Employee Count"}/>
                        <Input type={'text'} defaultValue={startupData.total_founding} label={"Total Founding"}/>
                    </li>
                </ul>
                <div className={styles.buttonWrapper}>
                    <button>Update</button>
                </div>
            </form>}
        </main>
    )
}

export default StartupPage