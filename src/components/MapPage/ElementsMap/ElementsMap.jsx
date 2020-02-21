import React from 'react';
import PropTypes from 'prop-types';
import AppLayerGroupe from "../AppLayerGroup";
import {connect} from "react-redux";

const propTypes = {
    layers: PropTypes.object,
};

class ElementsMap extends React.Component {
    render() {
        return (<div style={{display: 'none'}}>
                {Object.values(this.props.layers).map((element) =>
                    (Object.keys(element).length !== 0) ? <AppLayerGroupe key={element.id} layerGroup={element}/> : null
                )}
            </div>
        );
    }
}

ElementsMap.propTypes = propTypes;

export default connect(
    state => ({
        layers: state.layerGroups, //.filter(track => track.name.includes(state.filterTracks)),
    }))(ElementsMap);
