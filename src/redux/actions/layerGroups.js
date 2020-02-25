
export const actionTypes = {
    START_TRACKING: 'START_TRACKING',
    ADD_LAYER_GROUPS: 'ADD_LAYER_GROUPS',
    FAILURE: 'FAILURE',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    FOCUS_MARKER: 'FOCUS_MARKER',
};

export const failure = (error) => ({ type: actionTypes.FAILURE, error});

export const loadDataSuccess = (payload) => ({ type: actionTypes.LOAD_DATA_SUCCESS, payload });

export const focusMarker = (id, layer) => {
    return ({type: actionTypes.FOCUS_MARKER, data: {id, layer}})
};

export const loadData = () => ({ type: actionTypes.LOAD_DATA });

export const getLayerGroups1 = () => ({type: 'ADD_LAYER_GROUPS', payload: mockApiData_1});
export const getLayerGroups2 = () => ({type: 'ADD_LAYER_GROUPS', payload: mockApiData_2});
export const getLayerGroups3 = () => ({type: 'ADD_LAYER_GROUPS', payload: mockApiData_3});

const mockApiData_1 = {
    id: 1,
    name: 'global',
    markers: {
        41: {
            id: 41,
            lat: 50.005,
            lng: 36.229,
            description: 'что-то 1_1',
            event_type_id: 1000
        },
        42: {
            id: 42,
            lat: 50.004,
            lng: 36.228,
            description: 'что-то 1_2',
            event_type_id: 1111
        },
        43: {
            id: 43,
            lat: 50.006,
            lng: 36.227,
            description: 'что-то 1_3',
            event_type_id: 1
        }
    }
};

const mockApiData_2 = {
    id: 2,
    name: 'xyq',
    hide: true,
    markers: {
        44:{
            id: 44,
            lat: 50.004,
            lng: 36.229,
            description: 'что-то 2_1',
            event_type_id: 1
        },
        45:{
            id: 45,
            lat: 50.003,
            lng: 36.227,
            description: 'что-то 2_2',
            event_type_id: 1
        },
        46:{
            id: 46,
            lat: 50.002,
            lng: 36.226,
            description: 'что-то 2_3',
            event_type_id: 1
        }
    }
};

const mockApiData_3 = {
    id: 1,
    name: 'global',
    markers: {
        41: {
            id: 41,
            lat: 50.005,
            lng: 36.229,
            description: 'новый что-то 1_1',
            event_type_id: 2
        },
        42: {
            id: 42,
            lat: 50.004,
            lng: 36.228,
            description: 'новый что-то 1_2',
            event_type_id: 2
        },
        44: {
            id: 44,
            lat: 50.006,
            lng: 36.227,
            description: 'что-то 1_4',
            event_type_id: 1
        }
    }
};
