"use client"

import styles from "./Tabs.module.scss";
import Tab from "@/components/atoms/Tab/Tab";
import React from "react";

interface TabsProps {
    selected: number,
    setSelected: (params: any) => void
}

const Tabs = ({selected, setSelected}: TabsProps) => {

    return (
        <div className={styles.tabs}>
            <Tab onClick={() => setSelected(0)} selected={selected === 0} title={"Investors"}/>
            <Tab onClick={() => setSelected(1)} selected={selected === 1} title={"Mentors"}/>
        </div>
    )
}

export default Tabs
