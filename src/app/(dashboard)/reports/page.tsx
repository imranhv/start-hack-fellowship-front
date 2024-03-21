"use client"

import styles from './page.module.scss'
import {Metadata} from "next";
import Input from "@/components/atoms/Input/Input";
import {FormEvent} from "react";
import {sendMonthlyReport} from "@/api/startupAPI";

// export const metadata: Metadata = {
//     title: 'Reports | Start Fellowship Dashboard',
//     description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
// }

const DashboardPage = () => {

    // Get current date
    const currentDate = new Date();

    // Get first day of the current month
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Get last day of the current month
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Format the dates as strings (optional)
    const formattedFirstDay = formatDate(firstDay);
    const formattedLastDay = formatDate(lastDay);

    // Function to format date
    function formatDate(date: any) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    }

    const handleSubmit = async (e: FormEvent<any>) => {
        e.preventDefault()

        if (!e.currentTarget.employeeCount.value || !e.currentTarget.cashBurn.value || !e.currentTarget.revenue.value || !e.currentTarget.monthlyCost.value)
            return

        const data = [
            {
                name: "Employee Count",
                kpi_value: Number(e.currentTarget.employeeCount.value),
                north_star_metric: true,
            },
            {
                name: "Cash Burn",
                kpi_value: Number(e.currentTarget.cashBurn.value),
                north_star_metric: true,
            },
            {
                name: "Revenue",
                kpi_value: Number(e.currentTarget.revenue.value),
                north_star_metric: true,
            },
            {
                name: "Monthly Cost",
                kpi_value: Number(e.currentTarget.monthlyCost.value),
                north_star_metric: true,
            }
        ]

        const result = await sendMonthlyReport(data)
    }

    return (
        <main className={styles.main}>
            <h1>Track your startup journey</h1>
            <p>Submit your KPI report for the <strong>{`${formattedFirstDay} - ${formattedLastDay}`}</strong> period.
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ul>
                    <li>
                        <Input type={'text'} label={"Employee Count"} name={"employeeCount"} required/>
                        <Input type={'text'} label={"Net Cash Burn"} name={"cashBurn"} required/>
                        <Input type={'text'} label={"Revenue"} name={"revenue"} required/>
                        <Input type={'text'} label={"Monthly Cost"} name={"monthlyCost"} required/>
                    </li>
                </ul>
                <div className={styles.buttonWrapper}>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </main>
    )
}

export default DashboardPage