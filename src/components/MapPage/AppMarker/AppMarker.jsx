import React from 'react';
import {getIcons} from "./getIcons";

import L from 'leaflet';
import {Marker, Popup} from 'react-leaflet';

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

class AppMarker extends React.Component {
    render() {
        console.log(this.props.marker.id);

        return (
        <Marker
            position={[this.props.marker.lat, this.props.marker.lng]}
            icon={getIcons(this.props.marker.event_type_id)}
        >
            <Popup><span>{this.props.marker.description}</span></Popup>
        </Marker>)
    }
}

export default AppMarker;