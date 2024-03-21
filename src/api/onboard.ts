import {OnboardForm} from "@/interfaces/onboardForm";
import axios from "axios";

export async function submitOnboardForm(form: OnboardForm) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact-us`, {
                // firstname: form.fullName,
                // email: form.email,
                // phoneNumber: form.phoneNumber,
                // message: form.message,
                // type: form.type,
                // clientType: form.clientType
            }
        )

        return response.status;
    } catch (e) {
        console.error(`Error: Failed to submit contact us form: ${e}`);
        return 500;
    }
}