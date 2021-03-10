import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { useHistory } from 'react-router-dom'

export const signin = ( formData, history) => async (dispatch) => {
    try {


        history.push('/')
    } catch (err) {
        console.error(err)
    }
}

export const signup = ( formData, history) => async (dispatch) => {
    try {


        history.push('/')
    } catch (err) {
        console.error(err)
    }
}