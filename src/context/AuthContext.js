import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            // reset our state
            return { errorMessage: '', token: action.payload }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        case 'signout':
            return { token: null, errorMessage: ''}
        default:
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const signup = (dispatch) => async ({ email, password}) => {
    // make API request to sign up with email and password
    try {
        // if we sign up, modify our state, and we are authenticated
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)

        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch(err) {
        // if signing up fails, need to reflect an error message
        // everytime we are using dispatch
        // react automaticly call our reducer
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
    }
}

const signin = (dispatch) => async ({ email, password}) => {
    // make API request to sign in with email and password
    try {
        const response = await trackerApi.post('/signin', { email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch(err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
    }

    // if we sign in, modify our state, and we are authenticated

    // if signing in fails, need to reflect an error message
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('Signin')
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
)