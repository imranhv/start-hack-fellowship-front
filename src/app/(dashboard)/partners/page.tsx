import styles from './page.module.scss'
import {Metadata} from "next";
import PartnerCard from "@/components/molecules/PartnerCard/PartnerCard";
import Pagination from "@/components/organisms/Pagination/Pagination";
import {Suspense} from "react";
import Tab from "@/components/atoms/Tab/Tab";
import Tabs from "@/components/molecules/Tabs/Tabs";

export const metadata: Metadata = {
    title: 'Partners | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const PartnersPage = () => {
    return (
        <main className={styles.main}>
            <h1>Start Fellowship Partners</h1>
            <Tabs />
            <section>
                {Array(4).fill(0).map((mentor, index) => (
                    <PartnerCard key={index} name={"John Doe"} companyName={"PayPal X"}/>
                ))}
            </section>
            <Suspense>
            <Pagination totalPages={3}/>
            </Suspense>
        </main>
    )
}

export default PartnersPage