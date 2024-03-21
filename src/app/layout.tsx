import "./globals.css";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>SF Hub | Start Fellowship</title>
            <meta name="description" content={"Login into Start Fellowship Hub and continue your startup journey."}/>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
