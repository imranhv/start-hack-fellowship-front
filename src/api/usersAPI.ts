import apiClient from "@/api/apiClient";

export async function getAllUsers() {
    return apiClient
        .get('/startups/getAllUsers')
        .then(response => {
            if (response) {
                return response.data
            }
            return false
        })
        .catch(err => console.log(err))
}