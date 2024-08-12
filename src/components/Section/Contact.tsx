import React from 'react';
import { Box, Typography, Avatar, IconButton, Link } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import coderboy from '../../assets/coderboy.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const footerStyle = {
    py: 5,
    background: 'linear-gradient(35deg, black, #1171ef)',
    color: '#fff',
    boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
    border: 0,
    borderRadius: 2,
};
interface ContactSectionProps {
    id?: string;
}
const iconStyle = {
    width: 40,
    height: 40,
    objectFit: 'cover',
    mx: 1,
};

const Footer: React.FC<ContactSectionProps> = ({ id }) => {
    return (
        <Box sx={footerStyle} id={id}>
            <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 2 }}>
                <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} data-aos="flip-left"
                    data-aos-duration="1000">
                    <Avatar

                        src={coderboy}
                        sx={{ width: 200, height: 200, boxShadow: 3, mb: { xs: 3, lg: 0 } }}
                        alt="Profile Image"
                    />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Social Media Links */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 3, md: 0 } }}>
                        <Typography variant="h5" sx={{ mb: 2, marginLeft: '1rem' }}>Reach Out to me!</Typography>
                        <Box>
                        <IconButton href="mailto:shahjainam491@gmail.com" target="_blank" color="inherit" aria-label="YouTube">
                                <EmailIcon sx={iconStyle}/>
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/jainam-shah-a0b53b194" target="_blank" color="inherit" aria-label="LinkedIn">
                                <LinkedIn sx={iconStyle} />
                            </IconButton>
                     
                            <IconButton href="https://github.com/jainam844" target="_blank" color="inherit" aria-label="Twitter">
                                <GitHubIcon sx={iconStyle} />
                            </IconButton>
                            <IconButton href="https://www.instagram.com/jainam_shah_99" target="_blank" color="inherit" aria-label="YouTube">
                                <InstagramIcon sx={iconStyle} />
                            </IconButton>
                         
                        </Box>
                    </Box>

                    {/* Address Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 40,
                                height: 40,
                                mr: 2,
                                backgroundColor: '#1976d2',
                                color: 'white',
                            }}
                        >
                            <LocationOnIcon />
                        </Avatar>
                        <Typography variant="body2" sx={{ fontSize: '16px', fontWeight: 500 }}>
                         Ahmedabad, Gujarat, India
                        </Typography>
                    </Box>

                    {/* Contact Information */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Contact Information
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <Link href="mailto:shahjainam491@gmail.com" color="inherit" sx={{ textDecoration: 'none' }}>
                                shahjainam491@gmail.com
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="tel:+91 9510386322" color="inherit" sx={{ textDecoration: 'none' }}>
                                +91 9510386322
                            </Link>
                        </Typography>
                    </Box>
                </Box>

                {/* Footer Links */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        &copy; {new Date().getFullYear()} by Jainam | All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
