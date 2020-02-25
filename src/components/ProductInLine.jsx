import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { focusMarker } from '../redux/actions/layerGroups';
// import {onFocusMarker} from '../redux/saga';

const ProductInLine = (props) => {
  return (
    <div>
      <Button
        onClick={ props.onFocusMarker.bind(null, props.element.id, props.layer)}
      >
        {props.element.address}
      </Button>
    </div>
  );
}

export default connect(
  null,
  dispatch => ({
    onFocusMarker : (id, layer) => {
      dispatch(focusMarker(id, layer))
    }
  })
)(ProductInLine);
