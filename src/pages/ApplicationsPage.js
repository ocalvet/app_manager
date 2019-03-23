import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { requestApplications } from '../actions';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class ApplicationsPage extends React.Component {
  componentDidMount() {
    this.props.onRequestApplications();
  }
  render() {
    const { applications, classes } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Applications Page
        </Typography>
        <div>
          {applications.map(app => (
            <Button
              key={app.name}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {app.name}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applications: state.applications.all
});

const mapDispatchToProps = dispatch => ({
  onRequestApplications: () => dispatch(requestApplications())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ApplicationsPage));
