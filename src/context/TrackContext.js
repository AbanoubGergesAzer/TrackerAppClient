import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, actions) => {
    switch(actions.type) {
        case 'fetch_track':
            return actions.payload
        default:
            return state
    }
}

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetch_track', payload: response.data})
}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations })
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)