import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => {
  return {
    applicationContainer: {
      display: 'flex',
      flexDirection: 'row'
    }
  };
};

class ApplicationPage extends React.Component {
  render() {
    const { application, classes } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          {application.name}
        </Typography>
        <div className={classes.applicationContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  application: state.applications.selected
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ApplicationPage));
