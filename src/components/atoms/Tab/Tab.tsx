"use client"

import styles from './Tab.module.scss'
import {usePathname} from "next/navigation";

interface TabProps {
    title: string
    selected: boolean
    onClick: (params: any) => void
}

const Tab = ({title, selected, onClick}: TabProps) => {
    const pathname = usePathname()
    return (
        <span onClick={onClick} className={`${styles.tab} ${selected ? styles.active : ''}`}>{title}</span>
    )
}

export default Tab