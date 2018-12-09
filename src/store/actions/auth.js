import axios from 'axios';
import * as actionTypes from './actionsTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId, expiresIn) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        expiresIn: expiresIn
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            fullName: 'Boris Civcic',
            role: 'admin',
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC5nW8-XOJADEvU7Mi7sgmhUNhHfRxXNQI';
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC5nW8-XOJADEvU7Mi7sgmhUNhHfRxXNQI';
        }
        return axios.post(url, authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId, response.data.expiresIn));
            // dispatch(checkAuthTime(response.data.expiresIn));
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error));
        })
    };
};