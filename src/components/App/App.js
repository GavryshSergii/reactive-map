import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';

import MapPage from '../MapPage';

import {getLayerGroups1, getCivilEventsLayer} from '../../redux/actions/layerGroups';

class App extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justify: 'flex-end', width: '100vw', height: '100vh'}}>
                <div style={{ width: '20vw', float: 'left'}}>
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
        onGetCivilEventsLayer: () => dispatch(getCivilEventsLayer()),
        onGetLayerGroups: () => dispatch(getLayerGroups1()),
        onClearLayerGroups: () => dispatch({type: 'CLEAR_LAYER_GROUPS'})
    })
)(App);
