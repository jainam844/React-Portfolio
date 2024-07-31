import React from 'react';
import { Box, Typography, Avatar, IconButton, Link } from '@mui/material';
import { LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import contactIcon from '../../assets/time.gif'; // Example icon for address
import coderboy from '../../assets/coderboy.jpg';

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
                        <Typography variant="h5" sx={{ mb: 2 }}>Follow Me</Typography>
                        <Box>
                            <IconButton href="https://www.linkedin.com/company/yourcompany" target="_blank" color="inherit" aria-label="LinkedIn">
                                <LinkedIn sx={iconStyle} />
                            </IconButton>
                            <IconButton href="https://twitter.com/yourcompany" target="_blank" color="inherit" aria-label="Twitter">
                                <Twitter sx={iconStyle} />
                            </IconButton>
                            <IconButton href="https://youtube.com/channel/yourchannel" target="_blank" color="inherit" aria-label="YouTube">
                                <YouTube sx={iconStyle} />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Address Section */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 3, md: 0 } }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Address</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Avatar src={contactIcon} sx={{ width: 40, height: 40, mr: 2 }} />
                            <Typography variant="body2">Orega 202, Marlow International, Parkway, Marlow, SL7 1YL</Typography>
                        </Box>
                    </Box>

                    {/* Contact Information */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Contact Information</Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <Link href="mailto:info@yourcompany.com" color="inherit">info@yourcompany.com</Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link href="tel:+1234567890" color="inherit">+123 456 7890</Link>
                        </Typography>
                    </Box>
                </Box>

                {/* Footer Links */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        <Link href="https://www.yourcompany.com/privacy-policy" color="inherit" sx={{ mx: 1 }}>Privacy Policy</Link> |
                        <Link href="https://www.yourcompany.com/terms-of-use" color="inherit" sx={{ mx: 1 }}>Terms of Use</Link>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        &copy; {new Date().getFullYear()} Your Company Name | All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
