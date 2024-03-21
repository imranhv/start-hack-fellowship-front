import styles from './page.module.scss'
import {Metadata} from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: 'Application Options | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const DashboardPage = () => {
    return (
        <main>
            <main className={styles.main}>
                <h1>Start Fellowship Applications</h1>
                <div>
                    <div>
                        <h2>Incubation</h2>
                        <p>An incubation program offers early-stage startups the essential tools, resources, and support
                            to
                            develop their initial ideas into viable, scalable businesses. These programs typically
                            provide
                            office space, mentorship, training, and sometimes capital, in a structured environment that
                            fosters growth and innovation. They are ideal for entrepreneurs who are in the nascent
                            stages of
                            building their business and are looking for guidance, support, and a community to help
                            navigate
                            the challenges of starting up.</p>
                        <Link href={"#apply-form"}>
                            <span>Apply</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.378"
                                 viewBox="0 0 20.276 20.378">
                                <path id="Path_412" data-name="Path 412"
                                      d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z"
                                      transform="translate(0 20.378) rotate(-90)"></path>
                            </svg>
                        </Link>
                        <img src={"https://www.startglobal.org/hubfs/Pink%20Polygon-2.png"} alt={"right"}/>
                    </div>
                    <div>
                        <h2>Acceleration</h2>
                        <p>An acceleration program is designed for startups that have moved beyond the idea stage and
                            are
                            seeking rapid growth and scalability. These intensive, short-term programs offer mentorship,
                            investment opportunities, and access to a network of investors, mentors, and alumni. They
                            focus
                            on scaling the business, refining the product, and preparing for significant investment
                            rounds.
                            Acceleration programs are best suited for startups ready to take their business to the next
                            level and rapidly expand their market presence.</p>
                        <Link href={"#apply-form"}>
                            <span>Apply</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.378"
                                 viewBox="0 0 20.276 20.378">
                                <path id="Path_412" data-name="Path 412"
                                      d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z"
                                      transform="translate(0 20.378) rotate(-90)"></path>
                            </svg>
                        </Link>
                        <img src={"https://www.startglobal.org/hubfs/Frame%201%20(1)-2.png"} alt={"right"} />
                    </div>
                </div>
            </main>
        </main>
    )
}

export default DashboardPage