import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'Redux/Operation';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from 'Redux/selectors';
import ResponsiveAppBar from 'components/NavBar/NavBar';
import HomePageDesign from 'components/Design/HomePageDesign';
import Loader from 'components/Loader/Loader';

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

  useEffect(() => {
    if (isAuth) navigate('/login');
  }, [isAuth, navigate]);

  return (
    <HomePageDesign>
      <ResponsiveAppBar />
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 20,
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontSize: '14px',
            fontFamily: 'Verdana',
            fontWeight: '700',
            textTransform: 'uppercase',
            color: 'rgba(252, 132, 45, 1)',
            mt: 3,
            paddingLeft: '10px',
          }}
        >
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{
            mt: 2,
            width: '300px',
            gap: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            required
            id="standard-textarea"
            label="Name"
            name="name"
            variant="standard"
            onChange={handleChangeInput}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            id="standard-textarea"
            label="Email"
            name="email"
            variant="standard"
            onChange={handleChangeInput}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            name="password"
            label="Password"
            type="password"
            id="standard-textarea"
            variant="standard"
            onChange={handleChangeInput}
          />
        </Box>
        <Box
          mt={3}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '450px',
            alignItems: 'center',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              fontFamily: 'Verdana',
              fontSize: '14px',
              textTransform: 'unset',
              borderRadius: '30px',
              boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.5)',
              fontWeight: '700',
              width: '210px',
              height: '43px',
              backgroundColor: 'rgba(252, 132, 45, 1)',
            }}
          >
            {isAuth === 'login' ? <Loader /> : <>Log In</>}
          </Button>

          <Button
            type="submit"
            variant="contained"
            sx={{
              color: 'rgba(252, 132, 45, 1)',
              fontFamily: 'Verdana',
              fontSize: '14px',
              textTransform: 'unset',
              borderRadius: '30px',
              boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.5)',
              fontWeight: '700',
              width: '210px',
              height: '43px',
              marginTop: '15px',
              backgroundColor: 'white',
            }}
            onClick={() => navigate('/register')}
          >
            <>Register</>
          </Button>
        </Box>
      </Box>
    </HomePageDesign>
  );
}
