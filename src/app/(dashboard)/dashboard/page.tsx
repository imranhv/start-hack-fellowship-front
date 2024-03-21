import styles from './page.module.scss'
import {Metadata} from "next";
import KPICard from "@/components/molecules/KPICard/KPICard";
import {ChartOptions} from "chart.js";
import LineChart from "@/components/organisms/LineChart/LineChart";
import useUser from "@/hooks/useUser";
import React from "react";

export const metadata: Metadata = {
    title: 'Home | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const DashboardPage = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    const options: ChartOptions = {
        scales: {
            ticks: {
                beginAtZero: true,
            },
        }
    };

    return (
        <main className={styles.main}>
            <h1>Welcome back, User</h1>
            <section className={styles.graphs}>

            </section>

            <section>
                <h3>Overview</h3>
                <div className={styles.kpi}>
                    {Array(6).fill(0).map((kpi, index) => (
                        <KPICard key={index} label={"Total Revenue"} value={"100"}/>
                    ))}
                </div>
            </section>

            <section>
                <h3>Analytics</h3>
                <div className={styles.graph}>
                    {Array(6).fill(0).map((kpi, index) => (
                        <LineChart key={index}/>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default DashboardPage