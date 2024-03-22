"use client"

import styles from './page.module.scss'
import {Metadata} from "next";
import PartnerCard from "@/components/molecules/PartnerCard/PartnerCard";
import Pagination from "@/components/organisms/Pagination/Pagination";
import React, {Suspense} from "react";
import Tabs from "@/components/molecules/Tabs/Tabs";
import {getAllPartners} from "@/api/startupAPI";

// export const metadata: Metadata = {
//     title: 'Partners | Start Fellowship Dashboard',
//     description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
// }

const PartnersPage = () => {
    const [partners, setPartners] = React.useState()
    const [selected, setSelected] = React.useState<number>(0)

    React.useEffect(() => {
        getAllPartners().then(result => {
            console.log(result)
            setPartners(result)
        })
    }, [])

    return (
        <main className={styles.main}>
            <h1>Start Fellowship Partners</h1>
            <Tabs selected={selected} setSelected={setSelected}/>
            {partners && <section>
                {/*//@ts-ignore*/}
                {partners.filter(partner => selected === 0 ? partner.type === 'Investor' : partner.type === 'Mentor').map((partner: any, index: number) => (
                    <PartnerCard key={index} name={`${partner.name} ${partner.surname}`} companyName={partner.company_name} id={partner.id} slots={partner.slots} profession={partner.profession}/>
                ))}
            </section>}
            <Suspense>
                <Pagination totalPages={3}/>
            </Suspense>
        </main>
    )
}

export default PartnersPage