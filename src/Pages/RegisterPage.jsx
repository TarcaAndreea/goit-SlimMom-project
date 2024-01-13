import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, TextField, Container } from '@mui/material';
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
  console.log(email, password);
  useEffect(() => {
    if (isAuth) navigate('/login');
  }, [isAuth, navigate]);

  return (
    <HomePageDesign>
      <ResponsiveAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box>
          <Typography
            component="h1"
            variant="h5"
            fontSize="14px"
            fontFamily="Verdana"
            fontWeight="700"
            textTransform="uppercase"
            color="rgba(252, 132, 45, 1)"
          >
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              variant="standard"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontFamily: 'Verdana',
                  fontSize: '14px',
                  textTransform: 'unset',
                  borderRadius: '30px',
                  boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.5)',
                  fontWeight: '700',
                  width: '210px',
                  height: '43px',
                  marginTop: '35px',
                  backgroundColor: 'rgba(252, 132, 45, 1)',
                }}
              >
                {isAuth === 'login' ? <Loader /> : <>Log In</>}
              </Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: 'rgba(252, 132, 45, 1)',
                  fontFamily: 'Verdana',
                  fontSize: '14px',
                  textTransform: 'unset',
                  borderRadius: '30px',
                  boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.5)',
                  fontWeight: '700',
                  width: '210px',
                  height: '43px',
                  marginTop: '35px',
                  backgroundColor: 'white',
                }}
                onClick={() => navigate('/register')}
              >
                <>Register</>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </HomePageDesign>
  );
}
