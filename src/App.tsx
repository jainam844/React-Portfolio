import './App.css';
import Banner from './components/Section/Banner';
import DrawerAppBar from './components/Navbar/Navbar';
import Index from './components/Section/Index';
import EducationTimeline from './components/Section/Education';
import WorkExperienceTimeline from './components/Section/WorkExperience';
import SkillsSection from './components/Section/SkillsSectrion';
import ContactSection from './components/Section/Contact';
import BackToTopButton from './components/Section/BackToTopButton';
import Projects from './components/Section/Projects';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'system-ui',
  },
  
});
function App() {
  return (

    <div className="App">
          <ThemeProvider theme={theme}>

      <DrawerAppBar />
      <Banner />
      <Index />
      <EducationTimeline />
      <WorkExperienceTimeline id="experience" />
      <SkillsSection id="skill" />
      <Projects id="projects" /> 
      <ContactSection id="contact" />
      <BackToTopButton />
      </ThemeProvider>
    </div>

  );
}

export default App;
