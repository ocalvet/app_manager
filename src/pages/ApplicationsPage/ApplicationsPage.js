import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ApplicationIcon from './components/ApplicationIcon';
import { requestApplications } from '../../actions';

const styles = () => {
  return {
    applicationsContainer: {
      display: 'flex',
      flexDirection: 'row'
    }
  }
}

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
        <div className={classes.applicationsContainer}>
          {applications.map((app, i) => (
            <ApplicationIcon key={i} application={app} />
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
