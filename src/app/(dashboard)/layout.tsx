"use client"

import "../globals.css";
import styles from './layout.module.scss'
import React from "react";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import useUser from "@/hooks/useUser";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const {user} = useUser({redirectTo: "/login"})
    return (
        <section className={styles.dashboard}>
            <Sidebar />
            {children}
        </section>
    );
}
