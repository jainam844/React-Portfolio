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
      id="education"
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
        <Typography variant="h4" component="h1" gutterBottom marginBottom={0} color={"#1976d2"} fontWeight={600} sx={{
          position: 'relative', // Allows the pseudo-element to be positioned relative to this text
          '&::after': {
            content: '""',
            position: 'absolute',
            height: '3px',
            borderBottom: '2px dashed #0078ff', // Dashed line
            width: '100px',
            bottom: '-7px', // Adjust as needed for spacing
            left: '35%', // Center the line
            transform: 'translateX(-50%)', // Center the line
          },
        }}>
          Education
        </Typography>
      </Box>

      <Timeline position={isXs ? "right" : "alternate"}>
        <TimelineItem sx={{ '&::before': { display: 'none' } }}>
          {!isXs && (
            <TimelineOppositeContent marginTop={2}>
              <Typography variant="body1" color="text.primary" fontWeight={700}>
                2019 - 2023
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: '#ff5722' }}>
              <School sx={{ color: 'white' }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#ff8a65' }} />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-left">
            <Card
              sx={{
                width: { xs: 260, sm: 320 },
                mt: { xs: 2, sm: 2 },
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" fontWeight={600} color="#333">
                  B.E in Computer
                </Typography>
                <Typography variant="subtitle1" fontWeight={500} color="#666">
                  A. D. Patel Institute of Technology
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gujarat Technological University
                </Typography>
                <Typography variant="body1" color="text.primary" fontWeight={500}>
                  CGPA: 8.15
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ '&::before': { display: 'none' } }}>
          {!isXs && (
            <TimelineOppositeContent marginTop={2}>
              <Typography variant="body1" color="text.primary" fontWeight={700}>
                2018 - 2019
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: '#3f51b5' }}>
              <SchoolOutlined sx={{ color: 'white' }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#7986cb' }} />
          </TimelineSeparator>
          <TimelineContent
            data-aos="fade-right"
            data-aos-delay="400"
            sx={{
              display: { xs: 'block', sm: 'flex' },
              justifyContent: { sm: 'end' },
            }}
          >
            <Card
              sx={{
                width: { xs: 260, sm: 320 },
                mt: { xs: 2, sm: 2 },
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
              }}
            >  <CardContent>
                <Typography variant="h5" component="div" fontWeight={600} color="#333">
                  HSC
                </Typography>
                <Typography variant="subtitle1" fontWeight={500} color="#666">
                  M & M Mehta High School
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GSHSEB
                </Typography>
                <Typography variant="body1" color="text.primary" fontWeight={500}>
                  Board: 70%
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem sx={{ '&::before': { display: 'none' } }}>
          {!isXs && (
            <TimelineOppositeContent marginTop={2}>
              <Typography variant="body1" color="text.primary" fontWeight={700}>
                2016-2017
              </Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: '#4caf50' }}>
              <Assignment sx={{ color: 'white' }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#81c784' }} />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-left">
            <Card
              sx={{
                width: { xs: 260, sm: 320 },
                mt: { xs: 2, sm: 2 },
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" fontWeight={600} color="#333">
                  SSC
                </Typography>
                <Typography variant="subtitle1" fontWeight={500} color="#666">
                  M & M Mehta High School
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GSEB
                </Typography>
                <Typography variant="body1" color="text.primary" fontWeight={500}>
                  Board: 82%
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
