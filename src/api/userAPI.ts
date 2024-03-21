"use client";

import apiClient from "@/api/apiClient";

export async function login(username: string, password: string) {
    return apiClient
        .get('/login', {
            auth: {
                username,
                password,
            },
        })
        .then(response => {
            console.log(response)
            if (response) {
                localStorage.setItem('token', response.data.token)
                return response.data
            }
            return false
        })
        .catch(err => console.log(err))
}

export async function logout() {
    return apiClient
        .post('/logout', {})
        .then(response => {
            console.log(response)
            if (response) {
                localStorage.removeItem('token')
                return response.data
            }
            return false
        })
        .catch(err => console.log(err))
}