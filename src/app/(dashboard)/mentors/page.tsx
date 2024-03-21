import styles from './page.module.scss'
import {Metadata} from "next";
import PartnerCard from "@/components/molecules/PartnerCard/PartnerCard";
import Pagination from "@/components/organisms/Pagination/Pagination";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: 'Home | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const DashboardPage = () => {
    return (
        <main className={styles.main}>
            <h1>Start Fellowship Mentors</h1>
            {/*filter*/}
            <section>
                {Array(5).fill(0).map((mentor, index) => (
                    <PartnerCard key={index} name={"John Doe"} companyName={"PayPal X"}/>
                ))}
            </section>
            <Suspense>
            <Pagination totalPages={3}/>
            </Suspense>
        </main>
    )
}

export default DashboardPage