const initialState = {};

export default function layerGroups(state = initialState, action) {
  let name, newLayer;
  switch (action.type) {
    case 'ADD_LAYER_GROUPS':
      name = action.payload.name;
      newLayer = {};
      newLayer[name] = action.payload;
      if (state[name]) { //если слой с таким именем существует
        newLayer[name]['markers'] = { ...state[name].markers, ...action.payload.markers }; //объединяем маркеры старые с новыми
      }
      return { ...state, ...newLayer };
    case 'LOAD_DATA_SUCCESS':
      name = action.payload.name;
      newLayer = {};
      if (state[name]) { //если слой с таким именем существует
        newLayer[name] = {...state[name], ...action.payload};
        newLayer[name]['markers'] = { ...state[name].markers, ...action.payload.markers }; //объединяем маркеры старые с новыми
      } else {
        newLayer[name] = action.payload;
      }
      return { ...state, ...newLayer };
    case 'CLEAR_LAYER_GROUPS':
      return initialState;
    case 'ERR_LAYER_GROUPS':
      return state;
    case 'FAILURE':
      return { ...state, ...{ error: action.error } };
    case 'FOCUS_MARKER':
      name = action.data.layer;
      return {...state, [name]: {...state[name], openPopup: action.data.id}};
    default:
      return state;
  }
}
