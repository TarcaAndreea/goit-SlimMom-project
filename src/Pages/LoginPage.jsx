import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from 'components/NavBar/NavBar';
import HomePageDesign from 'components/Design/HomePageDesign';
import { selectIsAuthenticated } from 'Redux/selectors';
import css from './design.module.css';
import { login } from 'Redux/Operation';

export default function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuthenticated);

  const handleChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isAuth) navigate('/contacts');
  }, [isAuth, navigate]);

  return (
    <HomePageDesign>
      <ResponsiveAppBar />
      <div className={css.login_page}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              id="standard-basic"
              label="Email *"
              variant="standard"
              type="email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <TextField
              id="outlined-password-input"
              label="Password *"
              type="password"
              autoComplete="current-password"
              variant="standard"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Log in
              </Button>
              <Button variant="outlined" type="submit" sx={{ mt: 3, mb: 2 }}>
                Register
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </HomePageDesign>
  );
}
