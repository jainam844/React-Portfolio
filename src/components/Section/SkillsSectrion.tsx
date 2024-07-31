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
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/WStjjaZN32YEdyCXnkja.png', altText: 'HTML', skillName: 'HTML' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/He6zOD2wXR4xKWIYGVt5.png', altText: 'CSS', skillName: 'CSS' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/S1hnNzRKV759hTDUCyZt.png', altText: 'JavaScript', skillName: 'JavaScript' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/TDgHK934oEx654Af2neo.png', altText: 'Bootstrap', skillName: 'Bootstrap' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/9rT2mCYjVlLuBBoNfBA0.png', altText: 'ReactJS', skillName: 'ReactJS' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/tLDV3ypWj4jmR8XAw46P.png', altText: 'NodeJS', skillName: 'NodeJS' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/fOgpNquNSHDGaGjCRerb.png', altText: 'ExpressJS', skillName: 'ExpressJS' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/7c0dzHB62nwu4sE8oF2J.png', altText: 'MongoDB', skillName: 'MongoDB' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/zf9yKyATw2Gb2YCCj74B.png', altText: '.NET', skillName: '.NET' },
    { imageSrc: 'https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png', altText: 'SQL Server', skillName: 'SQL Server' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/D21ALFqlmSZfjMeskqLp.png', altText: 'PostgreSQL', skillName: 'PostgreSQL' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/r4KbD0cM7U9bedGoeAJd.png', altText: 'Github', skillName: 'Github' },
    { imageSrc: 'https://portfolio-v5-seven.vercel.app//uploads/aEN5B72kMHDhDSRcCRSS.png', altText: 'Git', skillName: 'Git' },
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
                mb: 0
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
                    <EngineeringIcon style={{ fontSize: '32px', color: '#1976d2' }} />
                </Box>
                <Typography variant="h4" component="h1"  gutterBottom marginBottom={-1} color={"#1976d2"} fontWeight={600}>
                    Skills
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    mt: -1
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