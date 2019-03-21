import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';
import { requestLogin } from '../../actions';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };
  onChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  onLogin = async event => {
    try {
      event.preventDefault();
      this.setState({ error: undefined });
      this.props.onLogin(this.state.username, this.state.password);
    } catch (error) {
      console.log('Error login in', error);
      this.setState({ error: 'Wrong username or password' });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Applications Dashboard
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={() => {}}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Email Address</InputLabel>
              <Input
                id="username"
                name="username"
                autoComplete="username"
                value={this.state.username}
                onChange={this.onChange('username')}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.onChange('password')}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="buttom"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onLogin}
            >
              Sign in
            </Button>
          </form>
          {this.state.error ? (
            <Typography variant="caption">{this.state.error}</Typography>
          ) : null}
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  onLogin: (username, password) => dispatch(requestLogin(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Login));
