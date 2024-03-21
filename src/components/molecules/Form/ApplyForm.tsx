"use client"

import React, {FormEvent} from "react";
import styles from './ApplyForm.module.scss'
import Input from "@/components/atoms/Input/Input";
import Select from "@/components/atoms/Select/Select";
import {OnboardForm} from "@/interfaces/onboardForm";
import {submitOnboardForm} from "@/api/onboard";

const ApplyForm = () => {
    const [step, setStep] = React.useState(0)
    const [selectedGender, setSelectedGender] = React.useState<string | null>(null)
    const [name, setName] = React.useState<string | null>(null)
    const [surname, setSurname] = React.useState<string | null>(null)
    const [birthDate, setBirthDate] = React.useState<string | null>(null)
    const [email, setEmail] = React.useState<string | null>(null)
    const [phoneNumber, setPhoneNumber] = React.useState<string | null>(null)
    const [country, setCountry] = React.useState<string | null>(null)
    const [city, setCity] = React.useState<string | null>(null)
    const [linkedIn, setLinkedIn] = React.useState<string | null>(null)
    const [uni, setUni] = React.useState<string | null>(null)
    const [fos, setFos] = React.useState<string | null>(null)
    const [unisd, setUniSd] = React.useState<string | null>(null)
    const [unied, setUniEd] = React.useState<string | null>(null)
    const [lvlEdu, setLvlEdu] = React.useState<string | null>(null)
    const [companyName, setCompanyName] = React.useState<string | null>(null)
    const [companyFoo, setCompanyFoO] = React.useState<string | null>(null)
    const [companyAbout, setCompanyAbout] = React.useState<string | null>(null)
    const [companyPot, setCompanyPot] = React.useState<string | null>(null)
    const [companyMot, setCompanyMot] = React.useState<string | null>(null)
    const [companyNoc, setCompanyNoc] = React.useState<string | null>(null)
    const [companyCof, setCompanyCof] = React.useState<string | null>(null)
    const [companyWhy, setCompanyWhy] = React.useState<string | null>(null)
    const [englishTest, setEnglishTest] = React.useState<string | null>(null)
    const [englishProf, setEnglishProf] = React.useState<string | null>(null)
    const [hearAbout, setHearAbout] = React.useState<string | null>(null)
    const [confirmEmail, setConfirmEmail] = React.useState<string | null>(null)
    const [password, setPassword] = React.useState<string | null>(null)
    const [consent, setConsent] = React.useState<string | null>(null)
    const [terms, setTerms] = React.useState<string | null>(null)
    const [agree, setAgree] = React.useState<string | null>(null)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const onboardForm: OnboardForm = {
            startup_data: {
                name: companyName,
                industry: companyFoo,
                description: companyAbout,
                company_potential: companyPot,
                number_of_co_founders: companyNoc,
                co_founders: companyCof,
                why_start: companyWhy,
            },
            user_data: {
                name: name,
                surname: surname,
                email: email,
                telephone: phoneNumber,
                gender: selectedGender,
                birthday: birthDate,
                country: country,
                city: city,
                linkedin_url: linkedIn,
                university_name: uni,
                major: fos,
                uni_start_date: unisd,
                uni_end_date: unied,
                student_level: lvlEdu,
                motivation_letter: companyMot,
                english_test: englishTest,
                english_proficiency_lvl: englishProf,
                hear_about_us: hearAbout,
                password: password,
                confirm_email: confirmEmail,
                is_consent_given: consent,
                are_terms_accepted: terms,
                is_agreed_to_rules: agree
            }
        }

        submitOnboardForm(onboardForm).then((statusCode) => setModalOpen({open: true, success: statusCode === 200}))
    }

    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            {
                step === 0 && <section>
                    <h3>Personal Details</h3>
                    <ul>
                        <li>
                            <Input placeholder={"Enter your name"} label="First Name" type='text' required={false}/>
                            <Input placeholder={"Enter your surname"} label="Last Name" type='text' required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"dd/mm/yyyy"} label="Date of Birth" type='text' required={false}/>
                            <Select placeholder={"Select your gender"} label={"Gender"} options={[{label: "Male", value: "Male"}, {label: "Female", value: "Female"}]}
                                    name={"gender"} selectedOption={selectedGender} setSelectedOption={setSelectedGender}/>
                        </li>
                        <li>
                            <Input placeholder={"Enter your email"} label="Email" type='email' required={false}/>
                            <Input label="Phone number" type='tel' required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"Enter your country of residence"} label="Country" type='text'
                                   required={false}/>
                            <Input placeholder={"Enter your city of residence"} label="City" type='text' required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"https://www.linkedin.com/in/username"} label="LinkedIn URL" type='text'
                                   required={false}/>
                        </li>
                    </ul>
                </section>
            }
            {
                step === 1 &&
                <section>
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <Input placeholder={"Enter your university"} label="University" type='text'
                                   required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"Enter your major/minor/subject"} label="Field of study" type='text'
                                   required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"dd/mm/yyyy"} label="Start Date" type='email' required={false}/>
                            <Input placeholder={"dd/mm/yyyy"} label="End Date" type='email' required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"Enter your level of education"} label="Level of education" type='email'
                                   required={false}/>
                        </li>
                    </ul>
                </section>
            }
            {
                step === 2 &&
                <section>
                    <h3>Startup</h3>
                    <ul>
                        <li>
                            <Input placeholder={"Enter your startup name"} label="Name" type='text'
                                   required={false}/>
                            <Input placeholder={"Enter your startup field"} label="Field of operation" type='text'
                                   required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"Enter description of your startup"} label="About"
                                   type='email' required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"What makes it stand out?"} label="Potential"
                                   type='email' required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"What is your motivation for your startup?"}
                                   label="Motivation"
                                   type='email' required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"How many people are in your team?"} label="Number of co-founders"
                                   type='number'
                                   required={false}/>
                            <Input placeholder={"Full names separated by commas"} label="Co-founders" type='email'
                                   required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"Why do you want to apply to START Fellowship?"}
                                   label="Why START Fellowship"
                                   type='email' required={false}/>
                        </li>
                    </ul>
                </section>
            }
            {
                step === 3 &&
                <section>
                    <h3>Additional Information</h3>
                    <ul>
                        <li>
                            <Input placeholder={"Which English proficiency test did you take?"} label="English Test"
                                   type='text'
                                   required={false}/>
                            <Input placeholder={"If you have taken a test, on what level are you on?"}
                                   label="Proficiency Level" type='text'
                                   required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"How did you hear about us?"} label="START Fellowship" type='text'
                                   required={false}/>
                        </li>
                    </ul>
                </section>
            }
            {
                step === 4 &&
                <section>
                    <h3>Account Creation</h3>
                    <ul>
                        <li>
                            <Input placeholder={"Please confirm your email address"} label="Email confirmation"
                                   type='email'
                                   required={false}/>
                        </li>
                        <li>
                            <Input placeholder={"Enter new password"} label="Password"
                                   type='password'
                                   required={false}/>
                        </li>
                        <li>
                            <input type="checkbox" id="aware" required/>
                            <label htmlFor="aware">I confirm being aware of the requirements of the program</label>
                        </li>
                        <li>
                            <input type="checkbox" id="agree" required/>
                            <label htmlFor="agree">By submitting this form, I acknowledge that I have read and
                                understood the provided definitions. I agree that the information I provide must align
                                with these definitions, and I am aware that failure to comply may result in my exclusion
                                from the application and program.</label>
                        </li>
                        <li>
                            <input type="checkbox" id="terms" required/>
                            <label htmlFor="terms">By submitting this form, I acknowledge that I have read and
                                understood the Terms and Conditions and the Privacy Policy.</label>
                        </li>
                    </ul>
                </section>
            }
            <div>
                {step !== 0 && <button onClick={(e) => {
                    e.preventDefault()
                    step > 0 && setStep(step - 1)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.379" viewBox="0 0 20.276 20.379">
                        <path id="Path_280" data-name="Path 280"
                              d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z"
                              transform="translate(20.276) rotate(90)"></path>
                    </svg>
                    <span>Back</span>
                </button>}
                {step === 4 ? <a href="/dashboard">
                    <span>Continue</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.378"
                         viewBox="0 0 20.276 20.378">
                        <path id="Path_412" data-name="Path 412"
                              d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z"
                              transform="translate(0 20.378) rotate(-90)"></path>
                    </svg>
                </a> : <button onClick={(e) => {
                    e.preventDefault()
                    step < 4 && setStep(step + 1)
                }}>
                    <span>Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.276" height="20.378"
                         viewBox="0 0 20.276 20.378">
                        <path id="Path_412" data-name="Path 412"
                              d="M9.229,0V16.6l-7.87-7.87L0,10.087l8.831,8.831h0l1.359,1.359h0l1.359-1.359h0l8.831-8.831L19.02,8.728,11.15,16.6V0Z"
                              transform="translate(0 20.378) rotate(-90)"></path>
                    </svg>
                </button>}
            </div>
        </form>
    )
}

export default ApplyForm
