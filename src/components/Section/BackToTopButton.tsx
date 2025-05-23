import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: showButton ? 'block' : 'none',
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={scrollToTop}
        sx={{
          borderRadius: '50%',
          minWidth: '48px',
          height: '48px',
          backgroundColor: '#2a578b',
          '&:hover': {
            backgroundColor: 'rgb(70 73 76)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Box>
  );
};

export default BackToTopButton;
