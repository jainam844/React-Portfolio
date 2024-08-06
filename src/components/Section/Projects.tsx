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
        title: 'FaceBookClone',
        description: `
        Explore a sleek and efficient Facebook Clone designed with TypeScript and React, utilizing ViteJS for ultra-fast builds. This project demonstrates a highly responsive and user-friendly social media platform – it's a game-changer! ⚡
      `,
        link: 'https://github.com/jainam844/FaceBookClone',
    },
    {
        image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'NetFlixClone',
        description: 'This is a Netflix clone built using React.js for the front-end and Node.js with MongoDB for the back-end. Although it is not a complete replica of Netflix and does not include all its features, it provides a similar experience with a unique design touch. The app highlights my React.js skills with features such as a home page, sign-in page, sign-up page, browse page, and movie player. This project demonstrates my capability to build complex applications like Netflix.',
        link: 'https://github.com/jainam844/Netflix-Clone-React-Node',
    },
    {
        image: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'CI PLATFORM',
        description: 'Introducing CI Platform, a comprehensive solution for Community Investment, Corporate Social Investment, and Community Social Investment. Built with ASP.NET MVC, Bootstrap, and jQuery, this platform offers a robust and user-friendly interface for managing and tracking investment initiatives. Empower your organization to make a meaningful impact with efficient project management, detailed reporting, and seamless community engagement.',
        link: 'https://github.com/jainam844/CIPLATFORM',
    },
    {
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'News App',
        description: 'Stay up-to-date with the latest global news using our dynamic News App. The app features a user-friendly interface that organizes news articles by categories, making it easy to browse and read the latest updates on topics of interest. With a focus on delivering a seamless and engaging browsing experience, you can explore breaking news, trends, and stories from around the world, all in one convenient platform.',
        link: 'https://github.com/jainam844/News-Web-App2',
    },

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
                mt: 3,
                paddingTop: '80px',
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
                <Typography variant="h4" component="h1" marginBottom={0} color={"#1976d2"} fontWeight={600} sx={{
                    position: 'relative', // Allows the pseudo-element to be positioned relative to this text
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        height: '3px',
                        borderBottom: '2px dashed #0078ff', // Dashed line
                        width: '80px',
                        bottom: '-7px', // Adjust as needed for spacing
                        left: '38%', // Center the line
                        transform: 'translateX(-50%)', // Center the line
                    },
                }}>
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
