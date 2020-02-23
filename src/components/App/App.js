import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';

import MapPage from '../MapPage';

import {getLayerGroups1, getLayerGroups2 } from '../../redux/actions/layerGroups';

class App extends Component {
    render() {
        return (
            <div className="app-root">
                <div className='container-menu'>
                  <h3>Список банкоматов</h3>
                    <div>
                        <button onClick={this.props.onGetLayerGroups}>Get LayerGroups</button>
                    </div>
                    <div>
                        <button onClick={this.props.onGetCivilEventsLayer}>Get CivilEventsLayer</button>
                    </div>
                    <div>
                        <button onClick={this.props.onClearLayerGroups}>Clear LayerGroups</button>
                    </div>
                </div>
                <MapPage/>
            </div>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        onGetCivilEventsLayer: () => dispatch(getLayerGroups2()),
        onGetLayerGroups: () => dispatch(getLayerGroups1()),
        onClearLayerGroups: () => dispatch({type: 'CLEAR_LAYER_GROUPS'})
    })
)(App);
