import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import time1 from '../../assets/time-unscreen.gif';

interface IndexProps {
    id?: string;
}

const Index: React.FC<IndexProps> = ({ id }) => {
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
                paddingTop: '65px', // Adjust this value based on the height of your sticky navbar
            }}
            id={id}
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
                    <Typography component="p" sx={{ mb: 2, fontWeight: 500 }}>
                        Welcome to my portfolio! I'm a passionate Full Stack Web Developer from India, having completed my Bachelor of Engineering in Computer Engineering. With expertise in React, Node.js, Express.js, MongoDB, HTML, CSS, Git, and GitHub, I specialize in creating dynamic, user-friendly web applications.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2, fontWeight: 500 }}>
                        My journey in technology has been fueled by an insatiable curiosity and a commitment to continuous learning. Whether it's designing sleek user interfaces or developing efficient backend systems, I am dedicated to delivering high-quality, innovative solutions. Stay tuned as I share my latest projects and insights in the world of web development.
                    </Typography>

                </Box>
            </Box>
        </Box>
    );
}

export default Index;
