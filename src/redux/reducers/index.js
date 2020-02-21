import {combineReducers} from 'redux';

import layerGroups from './layerGroups';
import settingMap from './settingMap';

export default combineReducers({
    layerGroups,
    settingMap,
});