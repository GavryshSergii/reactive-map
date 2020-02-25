import React from 'react';
import CustomizedExpansionPanel from './CustomizedExpansionPanel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const PanelStatus = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomizedExpansionPanel
        statusOnline={false}
      />
      <CustomizedExpansionPanel
        statusOnline={true}
      />
    </div>
  )
};

export default (PanelStatus);
