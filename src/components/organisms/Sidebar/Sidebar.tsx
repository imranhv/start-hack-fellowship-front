"use client"

import styles from './Sidebar.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";

const SIDEBAR_MENU_OPTIONS = [
    {pathname: "/dashboard", label: "Dashboard", roles: []},
    {pathname: "/applications", label: "My Applications", roles: []},
    {pathname: "/calendar", label: "Calendar", roles: []},
    {pathname: "/mentors", label: "Mentors", roles: []},
    {pathname: "/investors", label: "Investors", roles: []},
    {pathname: "/startup", label: "My Startup", roles: []},
    {pathname: "/reports", label: "Reports", roles: []},
    {pathname: "/profile", label: "Profile", roles: []},
]
const Sidebar = () => {
    const pathname = usePathname()

    return (
        <div className={styles.sidebar}>
            <h2>SF Hub</h2>
            <ul>
                {
                    SIDEBAR_MENU_OPTIONS.map(option => (
                        <li
                            key={option.pathname}
                            className={pathname === option.pathname ? styles.active : ""}
                        >
                            <Link href={option.pathname}>{option.label}</Link>
                        </li>
                    ))
                }
            </ul>
            <button>Logout</button>
        </div>
    );
};

export default Sidebar;