import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoImage from '../../Images/logo-D.png';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1280,
    },
  },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeButton, setActiveButton] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    console.log('Handle Register Click');
    navigate('/register');
    setActiveButton('Registration');
  };

  const handleLoginClick = () => {
    console.log('Handle Login Click');
    navigate('/login');
    setActiveButton('Log In');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          display: 'flex',
          alignContent: 'center',
        }}
      >
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <img
              src={logoImage}
              alt="Logo"
              style={{
                marginRight: '8px',
                display: { xs: 'none', md: 'flex' },
                width: '167px',
                height: '66px',
                cursor: 'pointer',
              }}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: '32px',
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                marginTop: 7,
                marginLeft: 2,
              }}
            />

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleLoginClick}>
                  <Typography textAlign="center">Log In</Typography>
                </MenuItem>
                <MenuItem onClick={handleRegisterClick}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                fontSize: 14,
                paddingTop: 6,
              }}
            >
              <Button
                sx={{
                  mx: 1,
                  color: activeButton === 'Log In' ? 'black' : '#9B9FAA',
                  '&:hover': {
                    color: 'black',
                  },
                }}
                onClick={handleLoginClick}
              >
                Log In
              </Button>

              <Button
                sx={{
                  mx: 1,
                  color: activeButton === 'Registration' ? 'black' : '#9B9FAA',
                  '&:hover': {
                    color: 'black',
                  },
                }}
                onClick={handleRegisterClick}
              >
                Register
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleOpenUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
