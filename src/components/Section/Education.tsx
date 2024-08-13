import { useEffect } from 'react';
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
import { School, SchoolOutlined, Assignment, } from '@mui/icons-material';
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
          textAlign: 'center', // Centers text inside the Box
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
            marginBottom: '1rem'
          }}
        >
          <MenuBookOutlinedIcon style={{ fontSize: '32px', color: '#1976d2' }} />
        </Box>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          color={"#1976d2"}
          fontWeight={600}
        >
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
                width: { xs: 260, sm: 340 },
                mt: { xs: 2, sm: 2 },
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
                },
                backgroundColor: '#fff', // Consistent background color
              }}
            >
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align content to the left
              }}>
                <Typography variant="h6" component="div" fontWeight={600} color="#333">
                  B.E in Computer
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#666"
                  mb={1}
                  display="flex"
                  alignItems="center"
                  sx={{
                    fontSize: {
                      xs: '0.8rem', // Small font size on extra small screens
                      sm: '0.875rem', // Slightly larger on small screens
                      md: '1rem', // Default size for medium screens and up
                    },
                  }}
                >
                  A. D. Patel Institute of Technology
                  <SchoolOutlined
                    sx={{
                      fontSize: '18px',
                      color: '#999',
                      mr: 1,
                    }}
                  />
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Gujarat Technological University
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                  <Typography variant="body2" color="text.primary" fontWeight={500}>
                    CGPA: 8.15
                  </Typography>
                </Box>
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
                width: { xs: 260, sm: 340 },
                mt: { xs: 2, sm: 2 },
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
                },
                backgroundColor: '#fff', // Consistent background color
              }}
            >
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align content to the left
              }}>
                <Typography variant="h6" component="div" fontWeight={600} color="#333">
                  HSC

                </Typography>
                <Typography variant="subtitle2" color="#666" mb={1} display={'flex'} alignItems={'center'} sx={{
                  fontSize: {
                    xs: '0.8rem', // Small font size on extra small screens
                    sm: '0.875rem', // Slightly larger on small screens
                    md: '1rem', // Default size for medium screens and up
                  },
                }}>
                  M & M Mehta High School
                  <SchoolOutlined sx={{ fontSize: '18px', color: '#999', mr: 1 }} />

                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GSHSEB
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                  {/* <SchoolOutlined sx={{ fontSize: '18px', color: '#999', mr: 1 }} /> */}
                  <Typography variant="body2" color="text.primary" fontWeight={500}>
                    Board: 70%
                  </Typography>
                </Box>
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
                width: { xs: 260, sm: 340 },
                mt: { xs: 2, sm: 2 },
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
                },
                backgroundColor: '#fff', // Consistent background color
              }}
            >
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align content to the left
              }}>
                <Typography variant="h6" component="div" fontWeight={600} color="#333">
                  SSC
                </Typography>
                <Typography variant="subtitle2" color="#666" mb={1} display={'flex'} alignItems={'center'} sx={{
                  fontSize: {
                    xs: '0.8rem', // Small font size on extra small screens
                    sm: '0.875rem', // Slightly larger on small screens
                    md: '1rem', // Default size for medium screens and up
                  },
                }}>
                  M & M Mehta High School
                  <SchoolOutlined sx={{ fontSize: '18px', color: '#999', mr: 1 }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GSEB
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>

                  <Typography variant="body2" color="text.primary" fontWeight={500}>
                    Board: 82%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default EducationTimeline;
