import { Box, Typography, Button } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Typewriter } from 'react-simple-typewriter';
import developerLight from '../../assets/coder.gif';
import developerDark from '../../assets/coder.gif';

const AppBanner = () => {
  const isDarkTheme = false; // Set this based on your actual dark theme check

  return (
    <Box
        id="banner"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '88vh', // Increased height
        textAlign: 'center',
        mt: { xs: 0, md: 0 },
        px: { xs: 2, sm: 4 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(35deg,  #0e76a8, #1171ef)',
          zIndex: -1,
        },
     
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '50%' },
          textAlign: 'center',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 2, sm: 4 },
        }}
        data-aos="fade-right" data-aos-delay="100"
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 2,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: { xs: 'lg', md: 'xl', lg: '2xl' },
            color: 'white',
            alignSelf: 'flex-center', // Align text to start
            textAlign: 'left', 
            // Ensure text alignment is left
          }}
          
        >
          He<span style={{ color: '#4c4b4b' }}>LL</span>o👋,
          <br />
          <span style={{ color: "white" }}>I'm Jainam Shah</span>
        </Typography>
        <Box
          sx={{
            mb: 3,
            fontSize: { xs: 'md', md: 'lg' },
            color: 'white',
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              fontWeight: 'bold',
              fontSize: '35px',
              color: 'rgb(0 0 0 / 54%)'
            }}
          >
            <Typewriter
              words={['Software Engineer', 'Full Stack Web Developer']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Box>
        </Box>
        <Button
          variant="outlined"
          href="/files/Stoman-Resume.pdf"
          download="Stoman-Resume.pdf"
          startIcon={<ArrowDownward />}
          
          sx={{
            borderColor: '#11cdef',
            color: 'black',
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'lightgray',
              color: 'black'
            },
            mt: 3,
            mb: 2,
            py: 1.5,
            px: 3,
            marginRight:"7rem"
          }}
          
        >
          Download CV
        </Button>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
             marginRight:"5rem"
          }}
        >
          <Button
            href="mailto:shahjainam491@gmail.com"
            target="_blank"
            rel="noopener"
            sx={{
              borderRadius: '50%',
              margin: 1,
              padding: 1,
              minWidth: 0,
              height: 40,
              width: 40,
              color: 'black',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#e3f2fd',
              }
            }}
          >
            <EmailIcon />
          </Button>
          <Button
            href="https://www.linkedin.com/in/jainam-shah-a0b53b194"
            target="_blank"
            rel="noopener"
            sx={{
              borderRadius: '50%',
              margin: 1,
              padding: 1,
              minWidth: 0,
              height: 40,
              width: 40,
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#e3f2fd',
              }
            }}
          >
            <LinkedInIcon />
          </Button>
          <Button
            href="https://github.com/jainam844"
            target="_blank"
            rel="noopener"
            sx={{
              borderRadius: '50%',
              margin: 1,
              padding: 1,
              minWidth: 0,
              height: 40,
              width: 40,
              backgroundColor: 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: '#e3f2fd',
              }
            }}
          >
            <GitHubIcon />
          </Button>
          <Button
            href="https://www.instagram.com/jainam_shah"
            target="_blank"
            rel="noopener"
            sx={{
              borderRadius: '50%',
              margin: 1,
              padding: 1,
              minWidth: 0,
              height: 40,
              width: 40,
              backgroundColor: '#e4405f',
              color: 'white',
              '&:hover': {
                backgroundColor: '#e3f2fd',
              }
            }}
          >
            <InstagramIcon />
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', sm: '50%' },
          textAlign: 'center',
          mt: { xs: 8, sm: 0 },
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 2, sm: 4 }
        }}
        data-aos="fade-left" data-aos-delay="100"
      >
        <Box
          component="img"
          src={isDarkTheme ? developerLight : developerDark}
          alt="Developer"
          sx={{ width: '100%', maxWidth: '500px' }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50px',
          overflow: 'hidden',
          zIndex: 0
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 2560 100"
          style={{ display: 'block', width: '100%', height: '100%' }}
        >
          <polygon
            points="2560 0 2560 100 0 100"
            style={{ fill: 'white' }} // Adjust color as needed
          />
        </svg>
      </Box>
    </Box>
  );
};

export default AppBanner;
