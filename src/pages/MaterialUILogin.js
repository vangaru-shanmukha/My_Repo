import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AuthenticationService from '../Components/Login/AuthenticationService';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from "react-router-dom";
import Email from '../atoms/email_field';
import Password from '../atoms/password_field';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MaterialUILogin() {

  const classes = useStyles();
  const [userEmail, setUserEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [hasInputError, setHasInputError] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [authenticateError, setAuthenticateError] = React.useState("");

  const loginClicked = (event) => {
    event.preventDefault();
    console.log("[Login.js]")
    AuthenticationService
      .executeJwtAuthenticationService(userEmail, password)
      .then((response) => {
        console.log(response);
        AuthenticationService.registerSuccessfulLoginForJwt(userEmail, response.data.token, response.data.expires);
        console.log("success");
        setIsSubmit(true);
      }).catch(() => {
        setAuthenticateError("Invalid username or password");
        console.log("error");
      })
  };

  if(isSubmit) {
    return <Redirect to="/home" />
  };

  const handleChangeInEmail = (event) => {
    event.preventDefault();
    const email = event.target.value;
    setUserEmail(email);
    setAuthenticateError("");
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(email)) {
      setEmailError("Please enter valid email");
      setHasInputError(true);
    } else {
      setEmailError("");
      if (passwordError.length === 0 && password.length > 0) {
        setHasInputError(false);
      }
    }
  }

  const handleChangeInPassword = (event) => {
    event.preventDefault();
    const password = event.target.value;
    setPassword(password);
    setAuthenticateError("");
    if (password.length < 8) {
      setPasswordError("Invalid password");
      setHasInputError(true);
    } else {
      setPasswordError("");
      if (emailError.length === 0) {
        setHasInputError(false);
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Typography color="error" variant="caption" data-testid="errorText">
            <br></br>
            {authenticateError}
          </Typography>
          <Email
            label="Email Address"
            userEmail={userEmail}
            emailError={emailError}
            placeholder="Email Address"
            onChange={handleChangeInEmail}
          ></Email>
          <Password
            label="Password"
            password={password}
            passwordError={passwordError}
            onChange={handleChangeInPassword}
          ></Password>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginClicked}
            disabled={hasInputError ? true : false}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}