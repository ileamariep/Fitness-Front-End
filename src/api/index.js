import axios from 'axios';
import { storeCurrentUser } from '../auth'

const BASE = 'https://fitnesstrac-kr.herokuapp.com/api/'



export async function getPublicRoutines() {
    try {
        const { data } = await axios.get(`${BASE}/routines`);

        return data

    } catch (error) {
        throw error;
    }
}

export async function getActivities() {
    try {
        const { data } = await axios.get(`${BASE}/activities`);
        return data;
    } catch (error) {
        throw error;
    }
}



export async function updateActivity(id, updatedActivity) {
    try {
        const data = await fetch(`${BASE}activities/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: '',
                description: ''
            }),
            hheader: {
                "Content-Type": "application/json"
            }
        });
        const result = await data.json()

        return result

    } catch (error) {
        throw error;
    }
}

export async function registerUser(username, password) {
    try {
        const response =
            await fetch(`${BASE}/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })

        const data = await response.json()
        const token = await data.token
        storeCurrentUser(token)

    } catch (error) {
        console.log(error)
    }

};

export async function loginUser(username, password) {
    try {
        const response =
            await fetch(`${BASE}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })

        const data = await response.json()
        const token = await data.token
        storeCurrentUser(token)

    } catch (error) {
        console.log(error)
    }

};

export async function createRoutine(name, goal) {


    try {
        const myToken = JSON.parse(localStorage.getItem('token'))

        const response =
            await fetch(`${BASE}routines`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${myToken}`
                },
                body: JSON.stringify({
                    name,
                    goal,
                    isPublic: true
                }),
            })

        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }

};

export async function createActivity(name, description) {


    try {
        const myToken = JSON.parse(localStorage.getItem('token'))

        const response =
            await fetch(`${BASE}activities`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${myToken}`
                },
                body: JSON.stringify({
                    name,
                    description
                }),
            })

        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }

};

export async function deleteRoutine(id) {


    try {
        const myToken = JSON.parse(localStorage.getItem('token'))

        const response =
            await fetch(`${BASE}routines/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${myToken}`
                }
            })

        const { data } = await response.json();
        return data;

    } catch (error) {
        console.log(error)
    }

};

export async function deleteRoutineActivities(id) {


    try {
        const myToken = JSON.parse(localStorage.getItem('token'))

        const response =
            await fetch(`${BASE}routine_activities/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${myToken}`
                }
            })

        const { data } = await response.json();
        return data;

    } catch (error) {
        console.log(error)
    }

};

export async function myId() {


    try {
        const myToken = JSON.parse(localStorage.getItem('token'))

        const response =
            await fetch(`${BASE}users/me`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${myToken}`
                }
            })

        const { data } = await response.json();
        return data;

    } catch (error) {
        console.log(error)
    }

};





