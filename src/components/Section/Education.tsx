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
import { Typography, Box, Card, CardContent } from '@mui/material';
import { School, SchoolOutlined, Assignment, Book } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const EducationTimeline = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Ensures animations occur every time
    });
  }, []);

  return (
    <Box
      sx={{
        my: 5,
        px: { xs: 2, sm: 4 },
        textAlign: 'center',
        overflow: 'hidden',
        fontFamily: 'system-ui', // Apply the font-family here
      }}
    >
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
          <MenuBookOutlinedIcon style={{ fontSize: '32px', color: '#1976d2' }} />
        </Box>
        <Typography variant="h4" component="h1" gutterBottom marginBottom={-1} color={"#1976d2"} fontWeight={600}>
          Education
        </Typography>
      </Box>

      <Timeline position={isXs ? "right" : "alternate"}>
        <TimelineItem sx={{ '&::before': { display: 'none' } }}>
          {!isXs && (
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary" fontWeight={800}>
                2016 - 2020
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: '#ff5722' }}>
              <School sx={{ color: 'white' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-left">
            <Card sx={{ width: { xs: 250, sm: 300 }, mt: { xs: 2, sm: 2 }, border: '2px solid #D3D3D3' ,borderRadius: '8px', marginTop: -2 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  University of Example
                </Typography>
                <Typography variant="subtitle1">
                  Bachelor of Science in Computer Science
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Studied various aspects of computer science including algorithms, data structures, and software engineering.
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ '&::before': { display: 'none' } }}>
          {!isXs && (
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary" fontWeight={800}>
                2012 - 2016
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: '#3f51b5' }}>
              <SchoolOutlined sx={{ color: 'white' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            data-aos="fade-right"
            data-aos-delay="400"
            sx={{
              display: { xs: 'block', sm: 'flex' },
              justifyContent: { sm: 'end' },
            }}
          >
            <Card sx={{ width: { xs: 250, sm: 300 }, mt: { xs: 2, sm: 2 }, border: '2px solid #D3D3D3', borderRadius: '8px', marginTop: -2 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Example High School
                </Typography>
                <Typography variant="subtitle1">
                  High School Diploma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Focused on science and mathematics, participated in various extracurricular activities including coding clubs.
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ '&::before': { display: 'none' } }}>
          {!isXs && (
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary" fontWeight={800}>
                2508 - 2012
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: '#4caf50' }}>
              <Assignment sx={{ color: 'white' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-left">
            <Card sx={{ width: { xs: 250, sm: 300 }, mt: { xs: 2, sm: 2 }, border: '2px solid #D3D3D3', borderRadius: '8px', marginTop: -2 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  University of Example
                </Typography>
                <Typography variant="subtitle1">
                  Bachelor of Science in Computer Science
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Studied various aspects of computer science including algorithms, data structures, and software engineering.
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ '&::before': { display: 'none' } }}>
          {!isXs && (
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary" fontWeight={800}>
                2504 - 2508
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: '#ffeb3b' }}>
              <Book sx={{ color: 'black' }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent
            data-aos="fade-right"
            data-aos-delay="400"
            sx={{
              display: { xs: 'block', sm: 'flex' },
              justifyContent: { sm: 'end' },
            }}
          >
            <Card sx={{ width: { xs: 250, sm: 300 }, mt: { xs: 2, sm: 2 }, border: '2px solid #D3D3D3', borderRadius: '8px', marginTop: -2 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Example Elementary School
                </Typography>
                <Typography variant="subtitle1">
                  Elementary School Diploma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Learned fundamental skills and engaged in various educational and recreational activities.
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default EducationTimeline;
