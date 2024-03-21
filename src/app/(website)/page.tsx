import styles from "./page.module.scss"
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Home | Start Fellowship',
    description: 'Access resources, connect with professionals, and embark on your journey towards excellence. Join our community and begin your fellowship experience today.',
}

export default function Home() {
    return (
        <main className={styles.main}>
            <section className="container">
                <div>
                    <h1>Start Fellowship</h1>
                    <p>creating equal opportunities for entrepreneurs from all backgrounds.</p>
                </div>
                <video preload="metadata" id="pb-video" playsInline loop muted autoPlay>
                    <source src="https://7167649.fs1.hubspotusercontent-na1.net/hubfs/7167649/ORANGE%20slow.mp4#t=0.1"/>
                </video>
                <div className={styles.overlay}/>
            </section>
        </main>
    );
}
