import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from 'components/NavBar/NavBar';
import HomePageDesign from 'components/Design/HomePageDesign';
import { Link } from 'react-router-dom';

export default function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

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

    if (email === 'test@example.com' && password === 'password') {
      setIsAuth(true);
    }
  };

  useEffect(() => {
    if (isAuth) navigate('/contacts');
  }, [isAuth, navigate]);

  return (
    <HomePageDesign>
      <ResponsiveAppBar />
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
          Log In
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            mt: 2,
            width: '300px',
            gap: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={handleSubmit}
        >
          <TextField
            margin="normal"
            fullWidth
            required
            id="standard-textarea"
            label="Email"
            name="email"
            variant="standard"
            value={email}
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
            value={password}
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
            {' '}
            Log In
          </Button>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button
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
            >
              <>Register</>
            </Button>
          </Link>
        </Box>
      </Box>
    </HomePageDesign>
  );
}
