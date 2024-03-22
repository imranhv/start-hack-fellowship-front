"use client"

import styles from './page.module.scss'
import {Metadata} from "next";
import MeetingCards from "@/components/molecules/MeetingCards/MeetingCards";
import {getAllMeetingsOfClient} from "@/api/meetings";
import React from 'react';

// export const metadata: Metadata = {
//     title: 'Calendar | Start Fellowship Dashboard',
//     description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
// }

const CalendarPage = () => {
    const [meetings, setMeetings] = React.useState<any>([])

    React.useEffect(() => {
        getAllMeetingsOfClient().then(result => {
            console.log(result)
            setMeetings(result)
        })
    }, [])

    const MEETINGS = {
        upcoming: [],
        finished: []
    }

    meetings.map((meeting: any) => {
        if (new Date().getTime() < new Date(meeting.start_date).getTime()) { // @ts-ignore
            MEETINGS.upcoming.push(meeting)
        } else {
            // @ts-ignore
            MEETINGS.finished.push(meeting)
        }
    })

    let meetingsNotResponded = 0

    // MEETINGS.finished.forEach(meeting => {
    //     if (!meeting.ratingFromStartup && !meeting.ratingFromPartner) {
    //         meetingsNotResponded++;
    //     }
    // });

    return (
        <main className={styles.main}>
            <section>
                <h1>Meetings Overview</h1>
                <a href={"/partners"}>Add New Meeting</a>
            </section>

            <section className={styles.meetingsSection}>
                <h2>Upcoming Meetings</h2>
                <MeetingCards meetings={MEETINGS.upcoming}/>
            </section>
            <section className={styles.meetingsSection}>
                <div>
                    <span>You have not responded to {meetingsNotResponded} meetings</span>
                </div>
                <h2>Finished Meetings</h2>
                <MeetingCards meetings={MEETINGS.finished} finished/>
            </section>
        </main>
    )
}

export default CalendarPage