import "../globals.css";
import styles from './layout.module.scss'
import React from "react";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className={styles.dashboard}>
            <Sidebar />
            {children}
        </section>
    );
}
