import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  iconContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10,
    padding: 10,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#F5F5F5'
    },
    '& img': {
      margin: 10,
      width: 70,
      height: 70
    },
    '& h5': {
      overflowWrap: 'break-word'
    }
  }
});

const ApplicationIcon = ({ application, classes }) => {
  return (
    <div className={classes.iconContainer}>
      <img src={application.icon} alt="icon" />
      <Typography variant="h5">{application.name}</Typography>
    </div>
  );
};

export default withStyles(styles)(ApplicationIcon);
