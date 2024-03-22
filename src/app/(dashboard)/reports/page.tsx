"use client"

import styles from './page.module.scss'
import {Metadata} from "next";
import Input from "@/components/atoms/Input/Input";
import React, {FormEvent} from "react";
import {getReports, sendMonthlyReport} from "@/api/startupAPI";
import useUser from "@/hooks/useUser";
import Spinner from "@/components/organisms/Spinner/Spinner";

// export const metadata: Metadata = {
//     title: 'Reports | Start Fellowship Dashboard',
//     description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
// }

const DashboardPage = () => {
    const {user, loading} = useUser({redirectTo: "/login"})
    const [dynamicInputs, setDynamicInputs] = React.useState([]); // State to manage dynamic inputs

    React.useEffect(() => {
        if (user) {
            getReports(user.startUpCompanyId).then(result => {
                if (result) {
                    const kpiNames = result[0].kpis.filter((kpi: any) => kpi.name !== "Employee Count"
                        && kpi.name !== "Cash Burn"
                        && kpi.name !== "Revenue"
                        && kpi.name !== "Monthly Cost").map((kpi: any) => {
                        return {
                            label: kpi.name,
                            name: `${dynamicInputs.length + 1}`, // Generate a unique name for the input
                            required: true // You can modify this as needed
                        };
                    })

                    setDynamicInputs(kpiNames)
                }
            })

        }
    }, [user])

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

        if (!e.currentTarget["Employee Count"].value || !e.currentTarget["Cash Burn"].value || !e.currentTarget["Revenue"].value || !e.currentTarget["Monthly Cost"].value)
            return

        const data = [
            {
                name: "Employee Count",
                kpi_value: Number(e.currentTarget["Employee Count"].value),
                north_star_metric: true,
            },
            {
                name: "Cash Burn",
                kpi_value: Number(e.currentTarget["Cash Burn"].value),
                north_star_metric: true,
            },
            {
                name: "Revenue",
                kpi_value: Number(e.currentTarget["Revenue"].value),
                north_star_metric: true,
            },
            {
                name: "Monthly Cost",
                kpi_value: Number(e.currentTarget["Monthly Cost"].value),
                north_star_metric: true,
            }
        ]

        const dataFinal = [...data, ...dynamicInputs.map((input: any) => ({
            name: input.label,
            kpi_value: Number(e.currentTarget[input.label].value),
            north_star_metric: false,
        }))]

        const result = await sendMonthlyReport(dataFinal).then((status) => {
            if (status === 200) {
                alert("Your KPI Report is successfully submitted!");
                window.location.reload();
            }
        })
    }

    const handleAddInput = () => {
        const label = prompt("Enter your desired custom KPI:")

        if (label) {
            const newInput = {
                label: label,
                name: `${dynamicInputs.length + 1}`, // Generate a unique name for the input
                required: true // You can modify this as needed
            };

            //@ts-ignore
            setDynamicInputs(prevInputs => [...prevInputs, newInput]); // Add new input to state
        }
    };

    return (
        <main className={styles.main}>
            <h1>Track your startup journey</h1>
            <p>Submit your KPI report for the <strong>{`${formattedFirstDay} - ${formattedLastDay}`}</strong> period.
            </p>
            {loading && <Spinner/>}
            {user &&
                <form onSubmit={(e) => handleSubmit(e)}>
                    <ul>
                        <li>
                            <Input type={'text'} label={"Employee Count"} name={"Employee Count"} required/>
                        </li>
                        <li>
                            <Input type={'text'} label={"Cash Burn"} name={"Cash Burn"} required/>
                        </li>
                        <li>
                            <Input type={'text'} label={"Revenue"} name={"Revenue"} required/>
                        </li>
                        <li>
                            <Input type={'text'} label={"Monthly Cost"} name={"Monthly Cost"} required/>
                        </li>
                        {dynamicInputs.map((input: any) => (
                            <li key={input.name}>
                                <Input type={'text'} label={input.label} name={input.label} required={input.required}/>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.buttonWrapper}>
                        <button type='button' onClick={handleAddInput}>Add Custom KPI</button>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            }
        </main>
    )
}

export default DashboardPage