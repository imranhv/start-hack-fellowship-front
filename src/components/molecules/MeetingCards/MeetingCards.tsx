"use client";

import React from 'react';
import styles from "./MeetingCards.module.scss";
import {addMeetingNote} from "@/api/meetings";

interface MeetingCardsProps {
    meetings: any,
    finished?: boolean
}

const LONG_DATE_OPTIONS: any = {
    day: 'numeric', month: 'long', year: 'numeric'
};

const DAY_TIME_OPTIONS: any = {
    weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
}

const MeetingCards = ({meetings, finished}: MeetingCardsProps) => {
    const [note, setNote] = React.useState("")
    const handleAddInput = (id: number) => {
        const label = prompt("Enter your notes about the meeting:")

        if (label) {
            //@ts-ignore
            setNote(label)

            const response = addMeetingNote(id, label).then(status => {
                if (status === 200) {
                    alert("Your meeting note is successfully submitted!");
                    window.location.reload();
                }
            })
        }
    };

    return (
        <>
            <ul className={styles.meetingCards}>
                {
                    meetings.map((meeting: any) => (
                        <li key={meeting.id}>
              <span
                  className={styles.meetingDate}
              >
                {
                    new Date(meeting.start_date)
                        .toLocaleDateString('en-GB', LONG_DATE_OPTIONS)
                        .replace(/ /g, "\n")
                }
              </span>
                            <div className={styles.meetingDetails}>
                                {
                                    !finished ? <span
                                            className={styles.meetingStartIn}>Meeting starting in {Math.floor((new Date(meeting.start_date).getTime() - new Date().getTime()) / (1000 * 60 * 60))} hours</span> :
                                        meeting.notes?.length === 0 ?
                                            <span onClick={() => handleAddInput(meeting.meeting_id)}
                                                  className={styles.fillFormBtn}>Please fill the form ✏️</span> :
                                            <span>Note: {meeting.notes[0].content}</span>
                                }
                                <strong>{meeting.attendees.length} Participant(s)</strong>
                                <span>
                {new Date(meeting.start_date).toLocaleDateString('en-GB', DAY_TIME_OPTIONS)}
                                    &nbsp;-&nbsp;
                                    {new Date(meeting.end_date).toLocaleDateString('en-GB', DAY_TIME_OPTIONS)}
              </span>
                                <a href={meeting.purpose} target="_blank">{meeting.purpose}</a>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default MeetingCards;