import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'Redux/Operation';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from 'Redux/selectors';
import ResponsiveAppBar from 'components/NavBar/NavBar';
import HomePageDesign from 'components/Design/HomePageDesign';
export default function RegisterPage() {
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
    dispatch(register({ email: email, password: password }));
  };
  console.log(email, password);
  useEffect(() => {
    if (isAuth) navigate('/login');
  }, [isAuth, navigate]);

  return (
    <HomePageDesign>
      <ResponsiveAppBar />
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          marginTop: '20%',

          padding: '30px',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography variant="h4" sx={{ fontSize: '30px', color: 'gray' }}>
          Register
        </Typography>
        <TextField
          type="name"
          name="name"
          placeholder="Name"
          variant="standard"
          fullWidth
          onChange={handleChangeInput}
        />
        <TextField
          type="email"
          name="email"
          variant="standard"
          fullWidth
          onChange={handleChangeInput}
        />
        <TextField
          type="password"
          name="password"
          variant="standard"
          fullWidth
          onChange={handleChangeInput}
        />
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Box>
    </HomePageDesign>
  );
}
