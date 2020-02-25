import React from 'react';
import { Marker } from 'react-leaflet';

const OpenPopupMarker = (props) => {
  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  };

  return <Marker ref={initMarker} {...props}/>
};

export default OpenPopupMarker;
