import styles from './PartnerCard.module.scss'
import Tag from "@/components/atoms/Tag/Tag";
import React, {FormEvent} from "react";
import Modal from "@/components/organisms/Modal/Modal";
import Input from "@/components/atoms/Input/Input";
import Select from "@/components/atoms/Select/Select";
import {setMeeting} from "@/api/meetings";
import useUser from "@/hooks/useUser";

interface PartnerCardProps {
    image?: string,
    name: string,
    companyName: string,
    id: number,
    slots: any[]
    profession: string,
}

const PartnerCard = ({name, companyName, image, id, slots, profession}: PartnerCardProps) => {
    const {user} = useUser({redirectTo: "/login"})

    const [isModalOpen, setModalOpen] = React.useState<boolean>(false)
    const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null)

    const options = slots
        .filter(slot => !slot.is_booked) // Filter out booked slots
        .map(slot => ({
            label: formatDate(new Date(slot.start_time)),
            value: formatDate(new Date(slot.start_time))
        }));

    function formatDate(meetingDateTime: any) {
        const day = String(meetingDateTime.getDate()).padStart(2, '0');
        const month = String(meetingDateTime.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
        const year = meetingDateTime.getFullYear();
        const hours = String(meetingDateTime.getHours()).padStart(2, '0');
        const minutes = String(meetingDateTime.getMinutes()).padStart(2, '0');
        const seconds = String(meetingDateTime.getSeconds()).padStart(2, '0');

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }

    const handleSubmit = async (e: FormEvent<any>) => {
        e.preventDefault()

        if (!e.currentTarget.meetingGoals.value && selectedSlot === null)
            return

        const slot_id = slots.filter(slot => formatDate(new Date(slot.start_time)) === selectedSlot)[0].slot_id

        const result = await setMeeting([id, user.id], selectedSlot!, e.currentTarget.meetingGoals.value, slot_id).then((status) => {
            if (status === 200) {
                alert("Your meeting is successfully booked!");
                setModalOpen(false)
            }
        })
    }

    return (
        <div className={styles.card}>
            <div>
                <div>
                    <img src={image ?? 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
                         alt={"Partner Photo"}/>
                    <h4>{name}</h4>
                    <p>{companyName}</p>
                </div>
            </div>
            <div>
                <Tag key={profession} label={profession}/>
                <button onClick={() => setModalOpen(true)}>Setup a meeting</button>
            </div>
            <Modal open={isModalOpen} onClose={() => {
                setModalOpen(false)
            }}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h2>Meeting Details</h2>
                    <ul>
                        <li>
                            <Select placeholder={"Reserve preferred time slot"} label={"Time Slot"}
                                    options={options}
                                    name={"gender"} selectedOption={selectedSlot} setSelectedOption={setSelectedSlot}/>
                        </li>
                        <li>
                            <Input type={'text'} label={"Meeting Goals"}
                                   placeholder={"Please enter purpose and goals for this meeting"}
                                   name={"meetingGoals"} required/>
                        </li>
                    </ul>
                    <button type={'submit'}>Reserve</button>
                </form>
            </Modal>
        </div>
    )
}

export default PartnerCard