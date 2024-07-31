import React, { useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import { Typography, Box, Card, CardContent, Avatar } from '@mui/material';
import { Star as StarIcon, Computer as ComputerIcon } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import tatvasoft from '../../assets/tatvasoft.png';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
interface WorkExperienceProps {
    id?: string;
}
const WorkExperienceTimeline: React.FC<WorkExperienceProps> = ({ id }) => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <Box sx={{ my: 5, px: { xs: 2, sm: 4 }, textAlign: 'center', overflow: 'hidden' }} id={id}>
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
                    <WorkOutlinedIcon style={{ fontSize: '32px', color: '#1976d2' }} />
                </Box>
                <Typography variant="h4" component="h1" gutterBottom marginBottom={-1} color={"#1976d2"} fontWeight={600}>
                    Work Experience
                </Typography>
            </Box>
            <Timeline position={isXs ? "right" : "alternate"}>
                <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                    {!isXs && (
                        <TimelineOppositeContent>
                            <Typography variant="body1" color="textSecondary" fontWeight={800}>
                                Jan - June 2024
                            </Typography>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineDot sx={{
                            bgcolor: '#4caf50',
                            width: 30,
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                            <ComputerIcon sx={{ color: '#ffffff' }} />
                        </TimelineDot>
                        <TimelineConnector sx={{
                            bgcolor: '#4caf50',
                            width: 4
                        }} />
                    </TimelineSeparator>
                    <TimelineContent data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Card sx={{
                            width: {
                                xs: 300,
                                sm: 300,
                                md: 400,
                                lg: 500,
                                xl: 600
                            },
                            mt: { xs: 2, sm: 2 },
                            border: '2px solid #D3D3D3',
                            borderRadius: '8px',
                            marginTop: -2
                        }}
                        >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Tatvasoft
                                </Typography>
                                <Typography variant="subtitle1">
                                    .NET Intern
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Learned about .NET MVC Core and developed an Online Doctor Appointment System called HalloDoc.
                                </Typography>
                            </CardContent>
                        </Card>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                    {!isXs && (
                        <TimelineOppositeContent>
                            <Typography variant="body1" color="textSecondary" fontWeight={800}>
                                August 2023
                            </Typography>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineDot sx={{
                            bgcolor: 'white',
                            width: 30,
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Avatar
                                src={tatvasoft}
                                sx={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                        </TimelineDot>
                        <TimelineConnector sx={{
                            bgcolor: '#f5425d',
                            width: 4
                        }} />
                    </TimelineSeparator>
                    <TimelineContent data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        sx={{
                            display: { xs: 'block', sm: 'flex' },
                            justifyContent: { sm: 'end' },
                        }}
                    >
                        <Card sx={{
                            width: {
                                xs: 300,
                                sm: 300,
                                md: 400,
                                lg: 500,
                                xl: 600
                            }, mt: { xs: 2, sm: 2 }, border: '2px solid #D3D3D3', borderRadius: '8px', marginTop: -2
                        }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Tatvasoft
                                </Typography>
                                <Typography variant="subtitle1">
                                    ReactJS Intern
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Learned about ReactJS and developed an e-commerce book selling platform.
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                    {!isXs && (
                        <TimelineOppositeContent>
                            <Typography variant="body1" color="textSecondary" fontWeight={800}>
                                June 2022
                            </Typography>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineDot sx={{
                            bgcolor: '#1976d2',
                            width: 30,
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                            <StarIcon sx={{ color: '#ffffff' }} />
                        </TimelineDot>
                        <TimelineConnector sx={{
                            bgcolor: '#1976d2',
                            width: 4
                        }} />
                    </TimelineSeparator>
                    <TimelineContent data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"

                    >
                        <Card sx={{
                            width: {
                                xs: 300,
                                sm: 300,
                                md: 400,
                                lg: 500,
                                xl: 600
                            }, mt: { xs: 2, sm: 2 }, border: '2px solid #D3D3D3', borderRadius: '8px', marginTop: -2
                        }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    TwoWaits
                                </Typography>
                                <Typography variant="subtitle1">
                                    Full Stack (MERN) Intern
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Learned Full Stack Web Development with ReactJS, ExpressJS, NodeJS, and MongoDB. Created and deployed a small project.
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
};

export default WorkExperienceTimeline;
