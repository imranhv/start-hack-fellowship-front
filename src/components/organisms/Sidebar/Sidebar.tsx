"use client"

import styles from './Sidebar.module.scss'
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {logout} from "@/api/userAPI";

const SIDEBAR_MENU_OPTIONS = [
    {pathname: "/dashboard", label: "Dashboard", roles: []},
    {pathname: "/applications", label: "My Applications", roles: []},
    {pathname: "/calendar", label: "Calendar", roles: []},
    {pathname: "/partners", label: "Partners", roles: []},
    {pathname: "/startup", label: "My Startup", roles: []},
    {pathname: "/reports", label: "Reports", roles: []},
    {pathname: "/profile", label: "Profile", roles: []},
]
const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter()

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
            <button onClick={async () => {
                const result = await logout()
                if (result) {
                    router.push("/")
                }
            }}>Logout
            </button>
        </div>
    );
};

export default Sidebar;