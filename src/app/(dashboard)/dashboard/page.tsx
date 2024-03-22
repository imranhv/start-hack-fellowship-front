"use client"

import styles from './page.module.scss'
import {Metadata} from "next";
import KPICard from "@/components/molecules/KPICard/KPICard";
import {ChartOptions} from "chart.js";
import LineChart from "@/components/organisms/LineChart/LineChart";
import useUser from "@/hooks/useUser";
import React from "react";
import {compareReports, getKPIData} from "@/api/startupAPI";
import Spinner from "@/components/organisms/Spinner/Spinner";

// export const metadata: Metadata = {
//     title: 'Home | Start Fellowship Dashboard',
//     description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
// }

const DashboardPage = () => {
    const {user, loading} = useUser({redirectTo: "/login"})
    const [reportData, setReportData] = React.useState<any>()
    const [graphData1, setGraphData1] = React.useState<any>()
    const [graphData2, setGraphData2] = React.useState<any>()
    const [graphData3, setGraphData3] = React.useState<any>()
    const [graphData4, setGraphData4] = React.useState<any>()

    React.useEffect(() => {
        const today = new Date()
        const prevDate = new Date()
        prevDate.setMonth(prevDate.getMonth() - 1)

        if (user) {
            compareReports(user.startUpCompanyId, [Math.floor(prevDate.getTime() / 1000), Math.floor(today.getTime() / 1000)]).then(result => {
                if (result)
                    setReportData(result)
                else {
                    setReportData(null)
                }
            })

            getKPIData(user.startUpCompanyId, "Employee Count").then(result => {
                if (result)
                    setGraphData1(result)
                else {
                    setGraphData1(null)
                }
            })

            getKPIData(user.startUpCompanyId, "Cash Burn").then(result => {
                if (result)
                    setGraphData2(result)
                else {
                    setGraphData2(null)
                }
            })

            getKPIData(user.startUpCompanyId, "Revenue").then(result => {
                if (result)
                    setGraphData3(result)
                else {
                    setGraphData3(null)
                }
            })

            getKPIData(user.startUpCompanyId, "Monthly Cost").then(result => {
                if (result)
                    setGraphData4(result)
                else {
                    setGraphData4(null)
                }
            })
        }
    }, [user])

    const kpis = {}
    const dateKeys = Object.keys(reportData ?? {})

    if (reportData) {
        if (reportData[dateKeys[0]] !== null) {
            for (let i = 0; i < reportData[dateKeys[0]].kpis.length; i++) {
                // @ts-ignore
                if (kpis[reportData[dateKeys[0]].kpis[i].name] === undefined)
                    // @ts-ignore
                    kpis[reportData[dateKeys[0]].kpis[i].name] = {}

                // @ts-ignore
                kpis[reportData[dateKeys[0]].kpis[i].name].startValue = reportData[dateKeys[0]].kpis[i].kpi_value
            }
        }

        if (reportData[dateKeys[1]] !== null) {
            for (let i = 0; i < reportData[dateKeys[1]].kpis.length; i++) {
                // @ts-ignore
                if (kpis[reportData[dateKeys[1]].kpis[i].name] === undefined)
                    // @ts-ignore
                    kpis[reportData[dateKeys[1]].kpis[i].name] = {}

                // @ts-ignore
                kpis[reportData[dateKeys[1]].kpis[i].name].endValue = reportData[dateKeys[1]].kpis[i].kpi_value
            }
        }
    }

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

    return (
        <main className={styles.main}>
            {loading && <Spinner/>}
            {user &&
                <>
                    <h1>Welcome back, {user.name} {user.surname}</h1>
                    <section className={styles.graphs}>

                    </section>

                    <section>
                        <h3>Overview</h3>
                        <div className={styles.kpi}>
                            {Object.keys(kpis).map((kpiKey, index) => (
                                // @ts-ignore
                                <KPICard key={index} label={kpiKey} value={kpis[kpiKey].endValue ?? 0}
                                    // @ts-ignore
                                         previousValue={kpis[kpiKey].startValue ?? kpis[kpiKey].endValue ?? 0}/>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3>Analytics</h3>
                        <div className={styles.graph}>
                            {[graphData1, graphData2, graphData3, graphData4].map((graph, index) => (
                                <LineChart key={index} data={graph}/>
                            ))}
                        </div>
                    </section>
                </>
            }
        </main>
    )
}

export default DashboardPage