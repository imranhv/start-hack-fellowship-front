import apiClient from "@/api/apiClient";

export async function getStartupInfo(id: number) {
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/startups/getInfo`,
            {
                startup_id: id
            }
        )

        return response.data;
    } catch (e) {
        console.error(`Error: Failed to get startup info: ${e}`);
        return 500;
    }
}

export async function sendMonthlyReport(data: any) {
    try {
        console.log(data)
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/startups/sendMonthlyReport`, data)

        return response.data;
    } catch (e) {
        console.error(`Error: Failed to send KPI report: ${e}`);
        return 500;
    }
}

export async function compareReports(startup_id: number, ranges: number[]) {
    return apiClient
        .post('/startups/compareReports', {startup_id, ranges})
        .then(response => {
            if (response) {
                return response.data
            }
            return false
        })
        .catch(err => console.log(err))
}