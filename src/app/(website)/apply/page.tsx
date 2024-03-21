import styles from './page.module.scss'
import {Metadata} from "next";
import ApplyForm from "@/components/molecules/Form/ApplyForm";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Application Form | Start Fellowship',
    description: 'Begin your fellowship journey by completing the application form. Kickstart your career and join a prestigious community of professionals.',
}

const ApplyPage = () => {
    return (
        <main className={styles.main}>
            <section className="container">
                <div>
                    <h1>Apply to<br/>Start Fellowship</h1>
                    <Link href={"#apply-form"}>
                        <span>Apply</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.378"
                             viewBox="0 0 20.378 20.276">
                            <path id="Path_412" data-name="Path 412"
                                  d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z">
                            </path>
                        </svg>
                    </Link>
                </div>

                <p>START Fellowship is a philanthropic incubator and accelerator empowering young founders from low- and
                    middle-income countries to put their ideas into reality through an interdisciplinary program. Our
                    visionaries are given the unique opportunity to work on and further develop their startups during a
                    four-month exchange in St.Gallen, all while being immersed in the thriving European ecosystem.</p>

                <p className={styles.important}>
                    This application form is individual and does not count for another co-founder you have. Other
                    co-founders need to apply separately. The application is limited for max. 2 co-founders per startup.
                    Keep in mind this form does not save your progress when filling it up, so make sure you have your
                    responses backed up.
                </p>
            </section>

            <section>
                <div className="container">
                    <h3>Application <span>Requirements</span></h3>
                    <div>
                        <ul>
                            <li>
                                <p>You are between 18-25 years old</p>
                            </li>
                            <li>
                                <p>You are committed to founding</p>
                            </li>
                            <li>
                                <p> You are a co-founder with at least a team of 2 people (no solo founders!)</p>
                            </li>
                            <li>
                                <p>You have a MVP (a first prototype to validate among first customers)</p>
                            </li>
                            <li>
                                <p>You are enrolled at a partner university of START Fellowship</p>
                            </li>
                            <li>
                                <p>You have good English skills</p>
                            </li>
                        </ul>
                        <img src="https://www.startglobal.org/hubfs/20230404_133431.jpg" alt="Requirements"/>
                    </div>
                </div>
            </section>

            <section id="apply-form">
                <div className="container">
                    <ApplyForm/>
                    <img
                        src="https://7167649.fs1.hubspotusercontent-na1.net/hubfs/7167649/01-START%20Fellowship%20Polygon_orange2.%20svg.svg"
                        alt="Application Process"/>
                </div>
            </section>
        </main>
    )
}

export default ApplyPage
