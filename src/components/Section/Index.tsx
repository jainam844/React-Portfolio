import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import time1 from '../../assets/time-unscreen.gif';

function Index() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <Box
            sx={{
                textAlign: 'center',
                my: 5, // Margin top and bottom
                px: { xs: 2, sm: 4 }, // Padding x
                overflow: 'hidden',
                marginTop: 13// Prevent horizontal scroll bar
            }}
        >
            {/* Section with heading and description */}
            <Box
                sx={{
                    mb: 5, // Margin bottom
                }}
            >
                <Typography variant="h3" component="h1" color={"#1976d2"} fontWeight={600}>
                    <span style={{ color: 'black' }}>About</span> Me
                </Typography>
                <Typography variant="h6" component="p" sx={{ mt: 2 }}>
                    CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                </Typography>
            </Box>

            {/* Section with image and additional text */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' }, // Row direction for larger screens
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: { xs: 4, lg: 8 }, // Gap between image and text
                    overflow: 'hidden' // Prevent horizontal scroll bar
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', lg: '50%' },
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: { xs: 2, lg: 4 },
                        overflow: 'hidden' // Prevent horizontal scroll bar
                    }}
                >
                    <Box
                        component="img"
                        src={time1}
                        alt="Developer"
                        sx={{ width: '100%', maxWidth: '500px' }}
                        data-aos="fade-right" data-aos-delay="400"
                    />
                </Box>

                <Box
                    sx={{
                        width: { xs: '100%', lg: '50%' },
                        textAlign: 'center',
                        zIndex: 1,
                        p: { xs: 2, lg: 4 },
                        overflow: 'hidden' // Prevent horizontal scroll bar
                    }}
                    data-aos="fade-left"
                    data-aos-delay="600"
                >
                    <Typography variant="h4" component="h1" sx={{ mb: 2 }} color={"#1976d2"} fontWeight={600}>
                        ⚡ Full Stack <span style={{ color: 'black' }}>Web Developer!</span>
                    </Typography>
                    <Typography  component="p" sx={{ mb: 2 ,fontWeight:500}}>
                        Welcome to my portfolio! I'm a passionate and dedicated Full Stack Web Developer based in India, currently pursuing my Bachelor of Engineering degree in Computer Engineering. With a strong foundation in React, Node.js, Express.js, MongoDB, HTML, CSS, Git, and GitHub, I thrive on building robust and user-friendly web applications.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 ,fontWeight:500}}>
                        Technology has always fascinated me, and I constantly strive to stay up-to-date with the latest trends and advancements in the field. From designing intuitive user interfaces to implementing efficient backend systems, I enjoy every aspect of the development process.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;
