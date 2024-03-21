"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss"
import {usePathname} from "next/navigation";

const Header = () => {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <nav>
                <Link href={"/"}>
                    <Image
                        src="https://www.startglobal.org/hubfs/2023/Images/sg-logo.svg"
                        alt="Start Fellowship Logo"
                        width={110}
                        height={50}
                        priority
                    />
                </Link>
                <ul>
                    <li>
                        <a href={"https://www.startglobal.org/start-fellowship"}>About</a>
                    </li>
                    <li>
                        <a href={"https://www.startglobal.org/start-fellowship-incubator"}>Incubator</a>
                    </li>
                    <li>
                        <a href={"https://www.startglobal.org/fellowship/accelerator"}>Accelerator</a>
                    </li>
                    <li>
                        <a href={"https://www.startglobal.org/fellowship/fellows"}>Fellows</a>
                    </li>
                    <li>
                        <a href={"https://www.startglobal.org/start-fellowship/partners-1"}>Partners</a>
                    </li>
                    <li>
                        <a href={"https://www.startglobal.org/start-fellowship-history"}>History</a>
                    </li>
                    <li>
                        <a href={"https://www.startglobal.org/start-fellowship-faq"}>Faq</a>
                    </li>

                    {pathname !== "/apply" && <li>
                        <Link href={"/apply"} className={styles.button}>
                            <span>Apply</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.378"
                                 viewBox="0 0 20.276 20.378">
                                <path id="Path_412" data-name="Path 412"
                                      d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z"
                                      transform="translate(0 20.378) rotate(-90)"></path>
                            </svg>
                        </Link>
                    </li>}
                </ul>
            </nav>
        </header>
    )
}

export default Header