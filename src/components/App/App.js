import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import MapPage from '../MapPage';
import PanelStatus from '../PanelStatus';

import { getLayerGroups1, getLayerGroups2 } from '../../redux/actions/layerGroups';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <PanelStatus/>
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
    onClearLayerGroups: () => dispatch({ type: 'CLEAR_LAYER_GROUPS' })
  })
)(App);
