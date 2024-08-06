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
import { Typography, Box, Card, CardContent, Avatar, Chip } from '@mui/material';
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
    const skills = [
        'REST API',
        'RxJS',
        'JavaScript',
        'Bootstrap',
        'MDBootstrap',
        'EF Core',
        '.NET Core',
        'SignalR',
        'Angular Material',
    ];
    return (
        <Box
            sx={{
                my: 5,
                px: { xs: 2, sm: 4 },
                textAlign: 'center',
                overflow: 'hidden',
                paddingTop: '80px', // Ensure visibility if behind a fixed navbar
            }}
            id={id}
        >
          <Box
    sx={{
      position: 'relative', // Allows the pseudo-element to be positioned relative to this box
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column', // Arrange items vertically
      gap: 2,
      mb: 4, // Margin-bottom to add some space after the header section
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
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

      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        marginBottom={0}
        color={"#1976d2"}
        fontWeight={600}
        sx={{
          position: 'relative', // Allows the pseudo-element to be positioned relative to this text
          '&::after': {
            content: '""',
            position: 'absolute',
            height: '3px',
            borderBottom: '2px dashed #0078ff', // Dashed line
            width: '100px',
            bottom: '-7px', // Adjust as needed for spacing
            left: '22%', // Center the line
            transform: 'translateX(-50%)', // Center the line
          },
        }}
      >
        Work Experience
      </Typography>
    </Box>
  </Box>
            <Timeline position={isXs ? "right" : "alternate"} sx={{ padding: '0' }}>
                <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                    {!isXs && (
                        <TimelineOppositeContent marginTop={2}>
                            <Typography variant="body1" color="text.primary" fontWeight={700}>
                                July 2023 - Present
                            </Typography>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                bgcolor: '#3f51b5',
                                width: 30,
                                height: 30,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <ComputerIcon sx={{ color: '#ffffff' }} />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: '#3f51b5', width: 4 }} />
                    </TimelineSeparator>
                    <TimelineContent
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Card
                            sx={{
                                width: {
                                    xs: 300,
                                    sm: 300,
                                    md: 400,
                                    lg: 500,
                                    xl: 600
                                },
                                mt: 2,
                                border: '2px solid #D3D3D3',
                                borderRadius: '8px',
                                boxShadow: 3,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mb: 1, // Margin bottom to add space below the title
                                    }}
                                    fontWeight={"bolder"}
                                >
                                    Tatvasoft
                                    <Avatar
                                        src={tatvasoft}
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            ml: 1, // Adds left margin to the icon for more spacing
                                        }}
                                    />
                                </Typography>
                                <Typography variant="subtitle1" fontWeight={"bold"}>
                                    Full Stack Developer
                                </Typography>
                                <Typography variant="body2" color="textSecondary" fontWeight={700}>
                                    Learned about .NET MVC Core and developed an Online Doctor Appointment System called HalloDoc.
                                </Typography>
                                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {skills.map((skill, index) => (
                                        <Chip
                                            key={index}
                                            label={skill}
                                            sx={{
                                                borderRadius: '12px',
                                                fontSize: '14px',
                                                backgroundColor: '#ffffff', // White background
                                                color: '#3f51b5', // Blue text color
                                                border: '1px solid #3f51b5', // Blue border
                                                px: 2, // Padding x-axis
                                                py: 0.5, // Padding y-axis
                                                fontWeight: 600,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
                                                '&:hover': {
                                                    backgroundColor: '#e3f2fd', // Very light blue background on hover
                                                    color: '#1a237e', // Darker blue text on hover
                                                    borderColor: '#1a237e', // Darker blue border on hover
                                                    transform: 'scale(1.05)', // Slight scale effect on hover
                                                },
                                            }}

                                        />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                    {!isXs && (
                        <TimelineOppositeContent marginTop={2}>
                            <Typography variant="body1" color="text.primary" fontWeight={700}>
                                Jan - June 2023
                            </Typography>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                bgcolor: '#f5425d',
                                width: 30,
                                height: 30,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <ComputerIcon sx={{ color: '#ffffff' }} />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: '#f5425d', width: 4 }} />
                    </TimelineSeparator>
                    <TimelineContent
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        sx={{
                            display: { xs: 'block', sm: 'flex' },
                            justifyContent: { sm: 'end' },
                        }}
                    >
                        <Card
                            sx={{
                                width: {
                                    xs: 295,
                                    sm: 300,
                                    md: 400,
                                    lg: 500,
                                    xl: 600
                                },
                                mt: 2,
                                border: '2px solid #D3D3D3',
                                borderRadius: '8px',
                                boxShadow: 3,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: {
                                            xs: 'flex-start', // Align items to the start on small screens
                                            sm: 'flex-end',   // Align items to the end on larger screens
                                        },
                                        gap: 1,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'start',
                                            gap: 1,
                                            mb: 1, // Margin bottom to add space below the title
                                        }}
                                        fontWeight={"bolder"}
                                    >
                                        Tatvasoft
                                        <Avatar
                                            src={tatvasoft}
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                ml: 1,
                                            }}
                                        />
                                    </Typography>
                                    <Typography variant="subtitle1" fontWeight={"bold"}>
                                        .NET Intern
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="textSecondary" fontWeight={700}>
                                    I learned about .NET MVC Core during my internship and also worked on a project called CI-PLATFORM.
                                </Typography>
                                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {skills.map((skill, index) => (
                                        <Chip
                                            key={index}
                                            label={skill}
                                            sx={{
                                                borderRadius: '12px',
                                                fontSize: '14px',
                                                backgroundColor: '#ffffff', // Light background
                                                color: '#f5425d', // Pink text color
                                                border: '1px solid #f5425d', // Pink border
                                                px: 2, // Padding x-axis
                                                py: 0.5, // Padding y-axis
                                                fontWeight: 600,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
                                                '&:hover': {
                                                    backgroundColor: '#ffe0e0', // Very light pink background on hover
                                                    color: '#f5425d', // Pink text color on hover (unchanged)
                                                    borderColor: '#f5425d', // Pink border on hover
                                                    transform: 'scale(1.05)', // Slight scale effect on hover
                                                },
                                            }}
                                        />


                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem sx={{ '&::before': { display: 'none' } }}>
                    {!isXs && (
                        <TimelineOppositeContent marginTop={2}>
                            <Typography variant="body1" color="text.primary" fontWeight={700}>
                                June - Aug 2022
                            </Typography>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                bgcolor: '#2f917d',
                                width: 30,
                                height: 30,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <ComputerIcon sx={{ color: '#ffffff' }} />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: '#2f917d', width: 4 }} />
                    </TimelineSeparator>
                    <TimelineContent
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Card
                            sx={{
                                width: {
                                    xs: 300,
                                    sm: 300,
                                    md: 400,
                                    lg: 500,
                                    xl: 600
                                },
                                mt: 2,
                                border: '2px solid #D3D3D3',
                                borderRadius: '8px',
                                boxShadow: 3,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mb: 1, // Margin bottom to add space below the title
                                    }}
                                    fontWeight={"bolder"}
                                >
                                    Tatvasoft
                                    <Avatar
                                        src={tatvasoft}
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            ml: 1,
                                        }}
                                    />
                                </Typography>
                                <Typography variant="subtitle1" fontWeight={"bold"}>
                                    ReactJS Intern
                                </Typography>
                                <Typography variant="body2" color="textSecondary" fontWeight={700}>
                                    I learned about ReactJS Library and practiced it by making an e-commerce book selling platform.
                                </Typography>
                                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {skills.map((skill, index) => (
                                        <Chip
                                            key={index}
                                            label={skill}
                                            sx={{
                                                borderRadius: '12px',
                                                fontSize: '14px',
                                                backgroundColor: '#fffdfe', // Light background
                                                color: '#004d40', // Teal text color
                                                border: '1px solid #004d40', // Teal border
                                                px: 2, // Padding x-axis
                                                py: 0.5, // Padding y-axis
                                                fontWeight: 600,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
                                                '&:hover': {
                                                    backgroundColor: '#cce5e5', // Light teal background on hover
                                                    color: '#004d40', // Teal text color on hover (unchanged)
                                                    borderColor: '#004d40', // Teal border on hover (unchanged)
                                                    transform: 'scale(1.05)', // Slight scale effect on hover
                                                },
                                            }}
                                        />

                                    ))}
                                </Box>

                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
};

export default WorkExperienceTimeline;
