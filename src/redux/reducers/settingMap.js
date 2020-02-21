const initialState = {
    zoom: 13,
    center: [50.005, 36.229],
    maxZoom: 18,
};

export default function settingMap(state = initialState, action) {
    if (action.type === 'SET_OPTIONS') {
        return action.payload;
    } else if (action.type === 'UPDATE_CENTRE_ZOOM') {
        return  { ...state, ...action.payload };
    } else if (action.type === 'DEFAULT_OPTIONS') {
        return initialState;
    }
    return state;
}