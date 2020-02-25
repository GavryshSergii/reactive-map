import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';

import ProductInLine from './ProductInLine';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CustomizedExpansionPanel = ({
                                    statusOnline,
                                    layers,
                                  }) => {
  const classes = useStyles();
  let filteredMarkers;
  Object.values(layers).forEach((element) => {
    if (element.name === 'TRACKING') {
       filteredMarkers = Object.values(element.markers)
                               .filter((item) => ((item.online === '0')^statusOnline))
    }
  });
  // console.log(filteredMarkers);

  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon/>}
        id={(statusOnline) ? 'online-panel-header' : 'offline-panel-header'}
      >
        <Typography className={classes.heading}>
          {(statusOnline) ? 'Online' : 'Offline'}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{'display': 'block'}}>
        {
          filteredMarkers.map((element) => (
            <ProductInLine key={element.id + element.ip} layer='TRACKING' element={element}/>)
          )
        }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default connect(
  state => ({
    layers: state.layerGroups,
  })
)(CustomizedExpansionPanel);
