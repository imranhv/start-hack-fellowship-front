import "../globals.css";
import Header from "@/components/organisms/Header/Header";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}
