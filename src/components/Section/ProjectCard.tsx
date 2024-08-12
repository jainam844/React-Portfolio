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
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: '20px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        background: 'linear-gradient(135deg, #f7f9fc, #a6bedd)',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
        },
        overflow: 'hidden',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
          }}
        />
        <CardContent sx={{ height: 150, overflow: 'hidden' }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 700, color: '#2c3e50' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
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
          backgroundColor: '#f1f3f5',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          '&:hover': {
            backgroundColor: '#e1e5e8',
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
            backgroundColor: '#2c3e50',
            '&:hover': {
              backgroundColor: '#34495e',
            },
            textTransform: 'none',
            borderRadius: '30px',
            padding: '8px 16px',
            fontWeight: 600,
            boxShadow: '0 6px 12px rgba(44, 62, 80, 0.2)',
          }}
        >
          View on GitHub
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;
