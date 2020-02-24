import React, {Component} from 'react';
import './MapPage.css';
import ElementsMap from './ElementsMap';
import 'leaflet/dist/leaflet.css';
import {connect} from 'react-redux';
import {Map, TileLayer, ZoomControl} from 'react-leaflet';
import {updateCentreZoomMap} from "../../redux/actions/settingMap";

class MapPage extends Component {
    render() {
        return (
            <div id="map">
                <Map
                    center={this.props.settingMap.center}
                    zoom={this.props.settingMap.zoom}
                    zoomControl={false}
                    maxZoom={this.props.settingMap.maxZoom}
                    onViewportChanged={this.props.onViewportChanged}
                >
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <ZoomControl position="bottomleft"/>
                    <ElementsMap/>
                </Map>
            </div>
        );
    }
}

export default connect(
    state => ({
        settingMap: state.settingMap
    }),
    dispatch => ({
        onViewportChanged: (viewport) => dispatch(updateCentreZoomMap(viewport)),
    }))(MapPage);