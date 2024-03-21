interface StartupData {
    name: string | null;
    industry: string | null;
    description: string | null;
    company_potential: string | null;
    number_of_co_founders: string | null;
    co_founders: string | null;
    why_start: string | null;
}

interface UserData {
    name: string | null;
    surname: string | null;
    email: string | null;
    telephone: string | null;
    gender: string | null;
    birthday: string | null;
    country: string | null;
    city: string | null;
    linkedin_url: string | null;
    university_name: string | null;
    major: string | null;
    uni_start_date: string | null;
    uni_end_date: string | null;
    student_level: string | null;
    motivation_letter: string | null;
    english_test: string | null;
    english_proficiency_lvl: string | null;
    reference: string | null;
    password: string | null;
    confirm_email: string | null;
    is_consent_given: boolean | null;
    are_terms_accepted: boolean | null;
    is_agreed_to_rules: boolean | null;
}

export interface OnboardForm {
    startup_data: StartupData;
    user_data: UserData;
}