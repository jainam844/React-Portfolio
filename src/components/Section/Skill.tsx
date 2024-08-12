import React from 'react';
import { Box, Typography } from '@mui/material';

interface SkillCardProps {
  imageSrc: string;
  altText: string;
  skillName: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imageSrc, altText, skillName }) => {
  return (
    <Box
      data-aos="flip-left"
      data-aos-duration="1000"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '20%', sm: '16%', md: '14%' }, // Adjust width for different screen sizes
        padding: 2
      }}
    >
      <Box
        sx={{
          backgroundColor: '#F8F8FF',
          borderRadius: '50%',
          padding: 2,
          marginBottom: 1,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: '#f9f9f9',
            transform: 'scale(1.05)',
            transition: 'background-color 0.15s, transform 0.15s'
          }
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          style={{
            width: '3.5rem',
            height: '3.5rem',
            objectFit: 'contain',
            transition: 'transform 0.15s'
          }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        {skillName}
      </Typography>
    </Box>
  );
};

export default SkillCard;
