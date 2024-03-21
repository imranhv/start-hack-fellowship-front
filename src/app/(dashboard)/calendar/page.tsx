import styles from './page.module.scss'
import {Metadata} from "next";
import MeetingCards from "@/components/molecules/MeetingCards/MeetingCards";
import {Meeting} from "@/interfaces/meetings";

export const metadata: Metadata = {
    title: 'Calendar | Start Fellowship Dashboard',
    description: 'Access personalized resources, track your progress, and connect with peers on your fellowship journey.',
}

const MEETINGS: { upcoming: Meeting[], finished: Meeting[] } = {
    upcoming: [
        {
            startTimestamp: 1710976550,
            endTimestamp: 1710976558,
            startup: "TeklifimGelsin",
            partner: "Metin Salt",
            meetingUrl: "https://example.com",
            id: 0,
            ratingFromStartup: undefined,
            punctualityFromStartup: undefined,
            notesFromStartup: undefined,
            ratingFromPartner: undefined,
            punctualityFromPartner: undefined,
            notesFromPartner: undefined,
        },
        {
            startTimestamp: 1710976550,
            endTimestamp: 1710976558,
            startup: "TeklifimGelsin",
            partner: "Metin Salt",
            meetingUrl: "https://example.com",
            id: 0,
            ratingFromStartup: undefined,
            punctualityFromStartup: undefined,
            notesFromStartup: undefined,
            ratingFromPartner: undefined,
            punctualityFromPartner: undefined,
            notesFromPartner: undefined,
        }
    ],
    finished: [
        {
            startTimestamp: 1710976550,
            endTimestamp: 1710976558,
            startup: "TeklifimGelsin",
            partner: "Metin Salt",
            meetingUrl: "https://example.com",
            id: 0,
            ratingFromStartup: undefined,
            punctualityFromStartup: undefined,
            notesFromStartup: undefined,
            ratingFromPartner: undefined,
            punctualityFromPartner: undefined,
            notesFromPartner: undefined,
        },
        {
            startTimestamp: 1710976550,
            endTimestamp: 1710976558,
            startup: "TeklifimGelsin",
            partner: "Metin Salt",
            meetingUrl: "https://example.com",
            id: 0,
            ratingFromStartup: undefined,
            punctualityFromStartup: undefined,
            notesFromStartup: undefined,
            ratingFromPartner: undefined,
            punctualityFromPartner: undefined,
            notesFromPartner: undefined,
        },
        {
            startTimestamp: 1710976550,
            endTimestamp: 1710976558,
            startup: "TeklifimGelsin",
            partner: "Metin Salt",
            meetingUrl: "https://example.com",
            id: 0,
            ratingFromStartup: 5,
            punctualityFromStartup: 4,
            notesFromStartup: "This was a productive meeting for us",
            ratingFromPartner: 1,
            punctualityFromPartner: 3,
            notesFromPartner: "They were late and did not know anything",
        }
    ]
}

const CalendarPage = () => {
    let meetingsNotResponded = 0

    MEETINGS.finished.forEach(meeting => {
        if (!meeting.ratingFromStartup && !meeting.ratingFromPartner) {
            meetingsNotResponded++;
        }
    });

    return (
        <main className={styles.main}>
            <section>
                <h1>Meetings Overview</h1>
                <a href={"/partners"}>Add New Meeting</a>
            </section>

            <section className={styles.meetingsSection}>
                <h2>📅 Upcoming Meetings</h2>
                <MeetingCards meetings={MEETINGS.upcoming}/>
            </section>
            <section className={styles.meetingsSection}>
                <div>
                    <span>You have not responded to {meetingsNotResponded} meetings</span>
                </div>
                <h2>✅ Finished Meetings</h2>
                <MeetingCards meetings={MEETINGS.finished} finished/>
            </section>
        </main>
    )
}

export default CalendarPage