"use client"

import styles from './page.module.scss'
import Input from "@/components/atoms/Input/Input";
import {FormEvent} from "react";

const ApplyPage = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <main className={styles.main}>
            <div>
                <h1>
                    Login to SF Hub
                </h1>
                <section>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <ul>
                            <li>
                                <Input type={'email'} label={"Email"} name={"email"}
                                       placeholder={"Enter your email"}/>
                            </li>
                            <li>
                                <Input type={'password'} label={"Password"} name={"password"}
                                       placeholder={"Enter your password"}/>
                            </li>
                        </ul>
                        <button type={'submit'}>Login</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default ApplyPage
