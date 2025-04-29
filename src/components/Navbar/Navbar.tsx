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
import JS from '../../assets/JS.png';
import { smoothScroll } from '../utils/smoothScroll';

const socialLinks = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
};

const pages = [
  { name: 'About Me', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skill' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  React.useEffect(() => {
    const sections = pages.map(page => document.getElementById(page.id));
    const bannerElement = document.getElementById('banner');
    const educationElement = document.getElementById('education'); // Add the education section
    
    const observer = new IntersectionObserver(
      (entries) => {
        let isBannerVisible = false;
        let isEducationVisible = false;
  
        entries.forEach(entry => {
          if (entry.target.id === 'banner') {
            isBannerVisible = entry.isIntersecting;
          } else if (entry.target.id === 'education') {
            isEducationVisible = entry.isIntersecting;
          } else if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
  
        if (isBannerVisible || isEducationVisible) {
          setActiveSection(''); // Clear active section if banner or education section is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );
  
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
  
    if (bannerElement) {
      observer.observe(bannerElement);
    }
  
    if (educationElement) {
      observer.observe(educationElement);
    }
  
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
      if (bannerElement) {
        observer.unobserve(bannerElement);
      }
      if (educationElement) {
        observer.unobserve(educationElement);
      }
    };
  }, []);
  

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={handleLogoClick}
          >
            <Avatar src={JS} />
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
              <Avatar src={Js} sx={{ mt: 1, cursor: 'pointer' }} onClick={handleLogoClick} />
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
                    sx={{ color: 'black' }}
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
                    sx={{
                      my: 2,
                      color: '#000000',
                      display: 'block',
                      width: '100%',
                      fontFamily: 'system-ui',
                      fontWeight: '700',
                      // Remove borderBottom for drawer items
                      borderBottom: 'none',
                      '&:hover': {
                        color: '#1a73e8',
                      }
                    }}
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
                sx={{
                  my: 2,
                  color: activeSection === page.id ? '#1a73e8' : '#000000',
                  display: 'block',
                  fontFamily: 'system-ui',
                  fontWeight: '700',
                  borderBottom: activeSection === page.id ? '2px solid #1a73e8' : 'none', // Horizontal line at bottom
                  '&:hover': {
                    color: '#1a73e8',
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
