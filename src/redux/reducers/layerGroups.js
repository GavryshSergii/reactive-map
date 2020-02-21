const initialState = {};

export default function layerGroups(state = initialState, action) {
    switch (action.type){
        case 'ADD_LAYER_GROUPS':
            const name = action.payload.name;
            const newLayer = {};
            newLayer[name] = action.payload;
            if (state[name]) { //если слой с таким именем существует
                newLayer[name]['markers'] = {...state[name].markers, ...action.payload.markers}; //объединяем маркеры старые с новыми
            }
            return { ...state, ...newLayer };
        case 'LOAD_DATA_SUCCESS':
            const nameLayer = action.payload.name;
            const newDataLayer = {};
            newLayer[nameLayer] = action.payload;
            return {...state, ...newDataLayer };
        case 'CLEAR_LAYER_GROUPS':
            return initialState;
        case 'ERR_LAYER_GROUPS':
            return state;
        default:
            return state;
    }
}