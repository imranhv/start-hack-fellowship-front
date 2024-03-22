import apiClient from "@/api/apiClient";

export async function getAllMeetingsOfClient() {
    return apiClient.get('/getAllMeetingsOfClient')
        .then(response => {
            if (response) {
                return response.data
            }
            return false
        })
        .catch(err => console.log(err))
}

export async function setMeeting(user_list: string[], start_date: string, purpose: string, slot_id: number) {
    return apiClient.post('/setMeeting', {user_list, start_date, purpose, slot_id})
        .then(response => {
            if (response) {
                return response.status
            }
            return false
        })
        .catch(err => console.log(err))
}

export async function addMeetingNote(meeting_id: number, content: string) {
    return apiClient.post('/addMeetingNote', {meeting_id, content})
        .then(response => {
            if (response) {
                return response.status
            }
            return false
        })
        .catch(err => console.log(err))
}