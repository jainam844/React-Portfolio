import React from 'react';
import ProjectCard from './ProjectCard';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import ComputerSharpIcon from '@mui/icons-material/ComputerSharp';
interface ProjectsProps {
    id?: string;
}
const projects = [
    {
        image: 'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles...',
        link: 'https://example.com',
    },
    {
        image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles...',
        link: 'https://example.com',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles...',
        link: 'https://example.com',
    },
    {
        image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles...',
        link: 'https://example.com',
    },
    // Add more projects as needed
];

const Projects: React.FC<ProjectsProps> = ({ id }) => {
    return (
        <Box 
        id={id}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 3
        }}>
      <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,  // Adjusts the gap between the icon and the text
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '64px',
                        height: '64px',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        borderRadius: '50%',
                        color: 'info.main',
                    }}
                >
                    <ComputerSharpIcon style={{ fontSize: '32px', color: '#1976d2' }} />
                </Box>
                <Typography variant="h4" component="h1" marginBottom={-1} color={"#1976d2"} fontWeight={600}>
                Projects
            </Typography>
            </Box>
  
            <Box sx={{ padding: 4 }}>
                <Grid container spacing={4} justifyContent="center">
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={5} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Projects;
