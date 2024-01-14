import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Box, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

import ResponsiveAppBar from 'components/NavBar/NavBar';
import HomePageDesign from 'components/Design/HomePageDesign';
import Loader from 'components/Loader/Loader';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        email,
        password,
      });

      console.log('Registration successful', response.data);
      setLoading(false);
      // Navigare către pagina de login sau altă destinație
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error.response.data);
      setLoading(false);
      // Poți adăuga aici gestionarea erorilor sau afișarea unui mesaj pentru utilizator
    }
  };

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
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            required
            id="standard-textarea"
            label="Email"
            name="email"
            variant="standard"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
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
            {loading ? <Loader /> : <>Log In</>}
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
              onClick={handleRegister}
            >
              <>Register</>
            </Button>
          </Link>
        </Box>
      </Box>
    </HomePageDesign>
  );
};

export default RegisterPage;
