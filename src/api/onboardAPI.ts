import {OnboardForm} from "@/interfaces/onboardForm";
import axios from "axios";

export async function submitOnboardForm(form: OnboardForm) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/startups/register`, {
                startup_data: {
                    name: form.startup_data.name,
                    industry: form.startup_data.industry,
                    description: form.startup_data.description,
                    company_potential: form.startup_data.company_potential,
                    number_of_co_founders: form.startup_data.number_of_co_founders,
                    co_founders: form.startup_data.co_founders,
                    why_start: form.startup_data.why_start,
                },
                user_data: {
                    name: form.user_data.name,
                    surname: form.user_data.surname,
                    email: form.user_data.email,
                    telephone: form.user_data.telephone,
                    gender: form.user_data.gender,
                    birthday: form.user_data.birthday,
                    country: form.user_data.country,
                    city: form.user_data.city,
                    linkedin_url: form.user_data.linkedin_url,
                    university_name: form.user_data.university_name,
                    major: form.user_data.major,
                    uni_start_date: form.user_data.uni_start_date,
                    uni_end_date: form.user_data.uni_end_date,
                    student_level: form.user_data.student_level,
                    motivation_letter: form.user_data.motivation_letter,
                    english_test: form.user_data.english_test,
                    english_proficiency_lvl: form.user_data.english_proficiency_lvl,
                    reference: form.user_data.reference,
                    password: form.user_data.password,
                    confirm_email: form.user_data.confirm_email,
                    is_consent_given: form.user_data.is_consent_given,
                    are_terms_accepted: form.user_data.are_terms_accepted,
                    is_agreed_to_rules: form.user_data.is_agreed_to_rules,
                }
            }
        )

        console.log(form)

        return response.status;
    } catch (e) {
        console.log(form)
        console.error(`Error: Failed to submit startup onboard form: ${e}`);
        return 500;
    }
}