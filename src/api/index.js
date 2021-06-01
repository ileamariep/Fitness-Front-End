import axios from 'axios';

const BASE = 'https://fitnesstrac-kr.herokuapp.com/api/'

//get all routine public routines (any user can see this)

// get my routines (registered user)

// POST request - form to create a new routine
// POST - update name and goal for routine
// DELETE - able to delete an entire routine
// POST - be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// POST - update durationi or count on any routine
// DELETE - removve activity from routine

export async function getPublicRoutines() {
    try {
        const { data } = await axios.get(`${BASE}/routines`);
        if (!data.isPublic) {
            return null;
        } else {
            return data
        }

    } catch (error) {
        throw error;
    }
}

export async function getPostsByUser(userId) {
    try {
        const { data } = await axios.get(`${BASE}/users/${userId}/posts`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getTodosByUser(userId) {
    try {
        const { data } = await axios.get(`${BASE}/users/${userId}/todos`);
        return data;
    } catch (error) {
        throw error;
    }
}