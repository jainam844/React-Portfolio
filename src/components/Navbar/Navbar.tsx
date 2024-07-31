import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import Js from '../../assets/JS1.png';
import { smoothScroll } from '../utils/smoothScroll';

const socialLinks = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
};

const pages = [
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skill' },
  { name: 'Contact', id: 'contact' },
];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <Avatar src={Js} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center', position: 'relative' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="primary"
              sx={{ position: 'absolute', left: 0 }}
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Avatar src={Js} sx={{ mt: 1 }} />
            </Box>

            <SwipeableDrawer
              anchor="top"
              open={drawerOpen}
              onClose={handleCloseDrawer}
              onOpen={handleDrawerToggle}
            >
              <Box
                sx={{ width: 'auto' }}
                role="presentation"
                onClick={handleCloseDrawer}
                onKeyDown={handleCloseDrawer}
              >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Avatar src={Js} />
                  <IconButton
                    onClick={handleCloseDrawer}
                    sx={{
                      color: 'black',
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                {pages.map((page) => (
                  <Button
                    key={page.id}
                    onClick={() => {
                      handleCloseDrawer();
                      smoothScroll(page.id);
                    }}
                    sx={{ my: 2, color: '#000000', display: 'block', width: '100%' }}
                  >
                    {page.name}
                  </Button>
                ))}
                <Box sx={{ mt: 2 }}>
                  {Object.entries(socialLinks).map(([key, url]) => (
                    <IconButton
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener"
                      sx={{ mx: 1, color: 'black' }}
                    >
                      <i className={`fa fa-${key}`} />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </SwipeableDrawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => smoothScroll(page.id)}
                sx={{ my: 2, color: '#000000', display: 'block', fontFamily: 'system-ui', fontWeight: '750' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default ResponsiveAppBar;
