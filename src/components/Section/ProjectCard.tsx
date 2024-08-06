import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link }) => {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      borderRadius: '16px', 
      boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      background: 'linear-gradient(145deg, #f5f7fa, #cdd8e9)',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)',
      },
      overflow: 'hidden', // Ensures no content overflows the card's borders
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{ 
            borderTopLeftRadius: '16px', 
            borderTopRightRadius: '16px',
            objectFit: 'cover', // Ensures the image covers the area without distortion
          }}
        />
        <CardContent sx={{ height: 150, overflow: 'hidden' }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4, // Limits to 4 lines
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2,
          borderTop: '1px solid #ddd',
          backgroundColor: '#f5f5f5',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          '&:hover': {
            backgroundColor: '#eaeaea',
          },
        }}
      >
        <Button
          href={link}
          target="_blank"
          rel="noopener"
          variant="contained"
          startIcon={<GitHubIcon />}
          sx={{
            backgroundColor: '#4a4848;',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
            textTransform: 'none',
            borderRadius: '20px',
            padding: '6px 12px',
            fontWeight: 500,
            boxShadow: '0px 6px 12px rgba(0, 123, 255, 0.5)',
          }}
        >
          GitHub
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;
