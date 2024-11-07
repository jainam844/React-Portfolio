// components/SkillsSection.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import SkillCard from './Skill'; // Import SkillCard component
import { Box, Typography } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';

interface Skill {
    imageSrc: string;
    altText: string;
    skillName: string;
}
interface SkillProps {
    id?: string;
}
const skills: Skill[] = [
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', altText: 'HTML', skillName: 'HTML' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', altText: 'CSS', skillName: 'CSS' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', altText: 'JavaScript', skillName: 'JavaScript' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg', altText: 'Bootstrap', skillName: 'Bootstrap' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', altText: 'ReactJS', skillName: 'ReactJS' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', altText: 'NodeJS', skillName: 'NodeJS' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png', altText: 'ExpressJS', skillName: 'ExpressJS' },
  { imageSrc: 'https://img.icons8.com/color/480/mongodb.png', altText: 'MongoDB', skillName: 'MongoDB' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg', altText: '.NET', skillName: '.NET' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', altText: 'SQL Server', skillName: 'SQL Server' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg', altText: 'Git', skillName: 'Git' },
  { imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', altText: 'Github', skillName: 'Github' }
];


const SkillsSection: React.FC<SkillProps> = ({ id }) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <Box
            id={id}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                mb: 0,
                paddingTop: '80px', // Adjust based on your navbar height
            }}
        >
       <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    textAlign: 'center', // Center the text horizontally
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
    <EngineeringIcon style={{ fontSize: '32px', color: '#1976d2' }} />
  </Box>
  <Typography
    variant="h4"
    component="h1"
    gutterBottom
    color={"#1976d2"}
    fontWeight={600}
  >
    Skills
  </Typography>
</Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        imageSrc={skill.imageSrc}
                        altText={skill.altText}
                        skillName={skill.skillName}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default SkillsSection;
