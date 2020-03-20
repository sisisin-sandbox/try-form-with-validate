import { Avatar, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import React from 'react';
import { Controller, FormContext, useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export const Mat: React.FC = () => {
  const classes = useStyles();
  const methods = useForm();
  const { register, handleSubmit, control } = methods;
  const [state, setState] = React.useState({});

  return (
    <Container>
      <CssBaseline></CssBaseline>
      <div className={classes.paper}>
        <pre>{JSON.stringify(state, null, '  ')}</pre>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormContext {...methods}>
          <form
            className={classes.form}
            onSubmit={React.useCallback(
              handleSubmit((data) => {
                setState(data);
              }),
              [],
            )}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  as={
                    <TextField
                      autoComplete="fname"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    ></TextField>
                  }
                  control={control}
                  name="firstName"
                  defaultValue=""
                ></Controller>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  inputRef={register}
                ></TextField>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign Up
            </Button>
          </form>
        </FormContext>
      </div>
    </Container>
  );
};
