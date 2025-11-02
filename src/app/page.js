'use client'

import React, { useEffect, useRef, useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar, Toolbar, Drawer, ListItemButton, ListItemText, Box, Container, Typography, Grid, Card, ButtonBase, CardContent, List, ListItem,
  Chip, Avatar, Divider, Fab, Modal, TextField, Button, ImageList, ImageListItem, IconButton, Snackbar, Alert, Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { motion, AnimatePresence, useAnimation, useTransform, useScroll } from 'framer-motion';
import theme from './theme';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/**
 * Portfolio — upgraded, interactive page
 * - Parallax hero (20vh)
 * - About Me with Avatar (Headshot at /public/images/Headshot.jpg)
 * - Education with logos (Hopkins.png, Ursinus.png)
 * - Skills (selected subset for data science) with hover animations
 * - Research & Projects: staggered cards + ImageList (interleaved images)
 * - Experience: staggered cards with logos
 * - Image lightbox modal (fade + scale up)
 * - Contact modal opened by FAB (and scroll-to-top mini FAB)
 */

export default function Portfolio() {
  // --------- Image lightbox ----------
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  // --------- Contact modal ----------
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add your send logic here

    // Show snackbar
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return; // prevent closing on clickaway
    setSnackbarOpen(false);
  };

  // --------- Scroll to top mini FAB ----------
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 320);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };


  // --------- Card equal-height handling ----------
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const researchRefs = useRef([]);
  const experienceRefs = useRef([]);
  const [researchHeight, setResearchHeight] = useState(0);
  const [experienceHeight, setExperienceHeight] = useState(0);
  useEffect(() => {
    const calcMax = (refs) => {
      const heights = refs.current.map(r => r?.offsetHeight || 0);
      return heights.length ? Math.max(...heights) : 0;
    };
    // small timeout to wait for images to load (simple approach)
    const t = setTimeout(() => {
      setResearchHeight(calcMax(researchRefs));
      setExperienceHeight(calcMax(experienceRefs));
    }, 120);
    return () => clearTimeout(t);
  }, []);

  // --------- Content (you can edit these) ----------
  const selectedSkills = [
    'Python', 'RStudio', 'JavaScript', 'SQL', 'Digital Signal Processing', 'NLP', 'Computer Vision',
    'Bayesian Methods', 'Statistical Modeling', 'Machine Learning', 'PowerBI'
  ];
  const galleryImages = ["UPE2.JPG", "XC2.png", "Wide.jpg", "Seniors.jpg", "XC6.JPG","Little.png"];

  const researchProjects = [
    {
      title: 'Physical Activity During the COVID-19 Pandemic',
      tech: 'RStudio · Causal Inference · BSTS Models',
      bullets: [
        'Causal impact analysis using IHME data and Bayesian Structural Time Series models',
        'Compared elderly and young adult women in CA & FL; accounted for stringency indices and DALYs',
        'Found increase in CVD prevalence in Florida (p=0.002) and decline in CA DALYs (p=0.031)'
      ],
      images: ['CausalImpact.png']
    },
    {
      title: 'Evaluating the Sensitivity of the Housing Market',
      tech: 'RStudio · Bayesian Regression · Macroeconomics',
      bullets: [
        'Identified macroeconomic drivers of housing prices and their stability during crises',
        'Applied Bayesian regression with LOO cross-validation and residual diagnostics',
        'Corrected violations of assumptions to extract top drivers: inflation, unemployment, population growth'
      ],
      images: ['HousingPrices.png']
    },
    {
      title: 'Ursinus College Degree Builder',
      tech: 'React/Redux · SQLite · Node.js',
      bullets: [
        'Led Agile SDLC as Scrum Master; requirements, UAT, documentation, and deployment',
        'Built full-stack React app with SQLite backend for academic planning',
        'Coordinated weekly standups and user testing to iterate UI/UX'
      ],
      images: ['DegreePlanner.png']
    },
    {
      title: 'Large Scale Audio Version Identification',
      tech: 'PyTorch · Deep Learning · DSP',
      bullets: [
        'Engineered self-similarity matrices from Da-TACOS for CNN input',
        'Built and evaluated CNNs for audio version/cover identification',
        'Scaled experiments to optimize accuracy and generalization'
      ],
      images: ['CoverSong.png']
    }
  ];

  const experiences = [
    {
      role: 'Technical Delivery Analyst',
      company: 'Computer Aid Inc. (CAI) — Contingent Workforce Solutions',
      dates: 'Feb 2025 – Present',
      bullets: [
        'Partnered with cross-functional teams to support implementation and analytics for public sector contracts',
        'Redesigned quarterly customer reporting using Power BI; improved insight delivery',
        'Automated contract-renewal & timesheet workflows via VBA scripting to reduce manual effort',
      ],
      logos: ['CAI.png']
    },
    {
      role: 'Data Analyst Intern',
      company: 'Computer Aid Inc. (CAI) — Neurodiverse Solutions',
      dates: 'Jun 2024 – Aug 2024',
      bullets: [
        'Engineered program performance metrics and presented actionable recommendations',
        'Led daily Agile standups and aligned cross-functional requirements',
        'Benchmarked metrics against BLS industry standards'
      ],
      logos: ['CAI.png']
    },
    {
      role: 'Lead Tutor',
      company: 'Ursinus College — CS/Math/Stats Tutoring',
      dates: 'Sep 2021 – May 2024',
      bullets: [
        'Onboarded & mentored new tutors, improving program delivery and assessment',
        'Developed personalized learning strategies and tracked progress for 40+ tutees'
      ],
      logos: ['Ursinus.png']
    }
  ];

  const HeroParallax = () => {
    const { scrollY } = useScroll(); // MotionValue

    // numeric blur 0 -> 8
    const numericBlur = useTransform(scrollY, [0, 400], [0, 8]);

    // convert numeric MotionValue to string "blur(Xpx)"
    const blurStyle = useTransform(numericBlur, b => `blur(${b}px)`);

    return (
      <motion.div
        style={{
          height: '35vh',
          backgroundImage: 'url(/images/GradBanner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          filter: blurStyle
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)' }} />
      </motion.div>
    );
  };

  const carouselImages = ['Somerville.png','XC1.png','Parents.jpg','XC7.JPG','Boston.png','PhiKaps.png','Regionals.JPG'];
  const toolTips={'Python': 'PyTorch, Pandas, Numpy, Scikit-learn, Statsmodels, Matplotlib, Seaborn', 'Digital Signal Processing': 'Waveforms, Fourier transform, Mel specrograms','NLP': 'Natural Language Processing', 'Statistical Modeling': 'Generalized Linear Models, Gaussian Mixture Models, Hidden Markov Models', 'Bayesian Methods': 'BSTS, Bayesian Networks, Naive Bayes', 'Machine Learning':'Supervised, Unsupervised, Deep Learning','JavaScript':'React/Redux, Bootstrap 5, Node.js', 'Computer Vision': 'Convolutional Neural Networks'}

  // --------- Motion variants ----------
  const sectionVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const lightboxVariant = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.32 } } };
  const heroControls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Parallax scaling + translateY
      const scale = 1 + offset * 0.0008; // subtle zoom
      heroControls.start({ y: offset * 0.3, scale });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroControls]);

  return (
    <Box sx={{ fontFamily: 'Poppins, sans-serif', backgroundColor: theme.palette.background.default, color: theme.palette.text.secondary, minHeight: '100vh' }}>
        {/* // ---------------------- Navbar ---------------------- */}
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', boxShadow: 'none', zIndex:1500 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar src="/images/Headshot.jpg" sx={{ width: 36, height: 36 }} />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>William C. Gillette</Typography>
          </Box>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {['About','Projects','Experience','Contact'].map(section => (
              <ButtonBase
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                sx={{
                  borderRadius: 1,
                  px: 1.5,
                  py: 0.5,
                  color: '#fff',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    backgroundColor: 'rgba(255,255,255,0.08)'
                  }
                }}
              >
                {section}
              </ButtonBase>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 220, p: 2 }}>
          {['Summary','About','Projects','Experience','Contact'].map(section => (
            <ListItemButton key={section} onClick={() => { scrollToSection(section.toLowerCase()); setDrawerOpen(false); }}>
              <ListItemText primary={section} />
            </ListItemButton>
          ))}
        </Box>
      </Drawer>

      {/* // ---------------------- Enhanced Parallax ---------------------- */}
      <HeroParallax/>
      <Container sx={{ py: 6 }}>
        {/* ===== Professional Summary ===== */}
        <motion.div id='summary' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>Professional Summary</Typography>
          <Typography paragraph sx={{ mt: 1 }}>
            Leveraging data science and full-stack development to deliver actionable insights and business intelligence. Experienced in statistical modeling, visualization, and software solutions for public sector and research applications. Currently pursuing a Master’s in Data Science at Johns Hopkins University, specializing in AI and machine learning.
          </Typography>
        </motion.div>
        {/* ===== About Me (avatar left) ===== */}
        <motion.div id='about' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <Grid container spacing={3} alignItems="center" sx={{ mt: 0 }}>
            
            {/* Left column: Avatar + social buttons + resume */}
            <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Avatar src="/images/Headshot.jpg" alt="Headshot"
                sx={{ width: 280, height: 280, border: `3px solid ${theme.palette.primary.main}` }}
              />
              
              {/* Social media buttons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton component="a" href="https://www.linkedin.com/in/williamcgillette" target="_blank" color="primary">
                  <LinkedInIcon />
                </IconButton>
                <IconButton component="a" href="mailto:wgillette02@gmail.com" target="_blank" color="primary">
                  <EmailIcon />
                </IconButton>
                <IconButton component="a" href="https://github.com/wigillette" target="_blank" color="primary">
                  <GithubIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* Right column: About Me card */}
            <Grid item xs={12} md={9}>
              <Card sx={{ backgroundColor: theme.palette.tertiary.main, color: '#fff', p: 2 }}>
                <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>About Me</Typography>
                <Typography paragraph sx={{ mt: 1 }}>
                  I am a data scientist with proficiency in Python, R, and full-stack development, focused on transforming complex data into actionable insights and intuitive applications. I graduated from Ursinus College with a triple major in Computer Science, Statistics, and Mathematics (GPA: 3.99), balancing academics with roles as a varsity athlete, fraternity academic chair, and lead tutor.
                </Typography>
                <Typography paragraph>
                  As a Technical Delivery Analyst in the Public Sector, I create data-driven recommendations, optimize workforce management, and produce business intelligence reports. My foundation in analysis and software development was strengthened through projects like a Bayesian regression housing market study and leading the development of a full-stack degree planner app as Scrum Master.
                </Typography>
                <Typography paragraph>
                  Currently, I am advancing my expertise through a Master’s in Data Science at Johns Hopkins University, specializing in AI and machine learning, with plans to progress to an applied statistics doctoral program. I aim to harness data science and intelligent automation to craft innovative solutions and drive digital transformation across industries.
                </Typography>
              </Card>
              {/* Resume download */}
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                component="a"
                href="/public/documents/WG_CV.pdf"
                download
                sx={{ mt: 1, backgroundColor: theme.palette.primary.main }}
              >
                Download Resume
              </Button>
            </Grid>

          </Grid>
        </motion.div>

        {/* ===== Education (logos horizontal) ===== */}
        <motion.div id='education' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <Typography variant="h5" sx={{ mt: 4, color: theme.palette.primary.main, fontWeight: 700 }}>Education</Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ display:'flex', alignItems:'center', backgroundColor: theme.palette.tertiary.main, color: '#fff', p:2, borderRadius: 2 }}>
                <Box sx={{ flex: '0 0 72px' }}>
                  <Image src="/images/Hopkins.png" alt="Hopkins" width={72} height={72} style={{ borderRadius: 8 }} />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Johns Hopkins University</Typography>
                  <Typography variant="body2">M.S. Data Science — AI & Machine Learning</Typography>
                  <Typography variant="body2">GPA: 4.0 — Expected May 2027</Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ display:'flex', alignItems:'center', backgroundColor: theme.palette.tertiary.main, color: '#fff', p:2, borderRadius: 2 }}>
                <Box sx={{ flex: '0 0 72px' }}>
                  <Image src="/images/Ursinus.png" alt="Ursinus" width={72} height={72} style={{ borderRadius: 8 }} />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Ursinus College</Typography>
                  <Typography variant="body2">B.S., Triple Major — Computer Science | Statistics | Mathematics</Typography>
                  <Typography variant="body2">GPA: 3.99 — December 2024</Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* ===== Skills (interactive chips) ===== */}
        <motion.div id='skills' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <Typography variant="h5" sx={{ mt: 4, color: theme.palette.primary.main, fontWeight: 700 }}>Skills</Typography>
          <Box sx={{ mt: 1 }}>
            <Grid container spacing={1}>
              {selectedSkills.map((skill) => (
                <Grid item xs="auto" key={skill}>
                  {skill in toolTips ?
                  <Tooltip title={toolTips[skill]}  arrow>
                    <motion.div whileHover={{ scale: 1.06 }} style={{ display: 'inline-block' }}>
                      <Chip
                        label={skill}
                        sx={{
                          background: 'linear-gradient(90deg, rgba(30,144,255,1), rgba(40,150,255,0.9))',
                          color: '#fff',
                          fontWeight: 600,
                          px: 1.5,
                          py: 0.5,
                          cursor: 'pointer'
                        }}
                      />
                    </motion.div>
                  </Tooltip>
                  : <motion.div whileHover={{ scale: 1.06 }} style={{ display: 'inline-block' }}>
                      <Chip
                        label={skill}
                        sx={{
                          background: 'linear-gradient(90deg, rgba(30,144,255,1), rgba(40,150,255,0.9))',
                          color: '#fff',
                          fontWeight: 600,
                          px: 1.5,
                          py: 0.5,
                          cursor: 'pointer'
                        }}
                      />
                    </motion.div>}
                </Grid>))
              }
            </Grid>
          </Box>
        </motion.div>

        {/* ===== Divider (skills -> research) ===== */}
        <Box sx={{ width: '100%', mt: 5 }}>
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ width: '100%', height: 36 }}>
            <path d="M0 0 C30 10 70 0 100 10 L100 0 L0 0 Z" fill={theme.palette.primary.main} />
          </svg>
        </Box>

        {/* ===== Research & Projects (staggered + ImageList inside cards) ===== */}
        <motion.div id='projects' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <Typography variant="h5" sx={{ mt: 4, color: theme.palette.primary.main, fontWeight: 700 }}>
            Independent Research & Projects
          </Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {researchProjects.map((proj, idx) => (
              <Grid
                item
                xs={12}
                md={6}
                key={proj.title}
                sx={{ transform: idx % 2 ? 'translateY(18px)' : 'translateY(0px)' }}
              >
                <motion.div whileHover={{ y: -6, boxShadow: '0 8px 30px rgba(0,0,0,0.35)' }} transition={{ duration: 0.25 }}>
                  <Card
                    ref={el => researchRefs.current[idx] = el}
                      sx={{
                          minHeight: 'auto',
                          backgroundColor: theme.palette.tertiary.main,
                          color: '#fff',
                          p: 2,
                          borderRadius: 2,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)', // subtle shadow
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 12px 28px rgba(0,0,0,0.35)', // stronger shadow on hover
                          }
                        }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{proj.title}</Typography>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>{proj.tech}</Typography>
                      </Box>
                    </Box>

                    <List dense sx={{ mt: 1 }}>
                      {proj.bullets.map((b, i) => <ListItem key={i} sx={{ pl: 0 }}>{b}</ListItem>)}
                    </List>

                    {proj.images && (
                      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {proj.images.map((img, i) => (
                          <Box
                            key={i}
                            sx={{ width: '100%', position: 'relative', cursor: 'pointer' }}
                            onClick={() => openLightbox(`/images/${img}`)}
                          >
                            <Image
                              src={`/images/${img}`}
                              alt={img}
                              width={1200} // adjust to image resolution
                              height={600} // adjust for aspect ratio
                              style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                borderRadius: 8
                              }}
                            />
                          </Box>
                        ))}
                      </Box>
                    )}

                    {/* ===== Download IconButton for publication ===== */}
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'left' }}>
                      <IconButton
                        component="a"
                        href="/documents/CS_Honors_Presentation.pdf"
                        download
                        sx={{
                          color: '#fff',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          '&:hover': { backgroundColor: theme.palette.primary.main, color: '#fff' },
                          borderRadius: 2,
                          p: 1.5,
                          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                        }}
                      >
                        <DownloadIcon />
                      </IconButton>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* ===== Carousel (small, keeps flow) ===== */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <Box sx={{ mt: 4 }}>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={4500} centerMode centerSlidePercentage={80}>
              {carouselImages.map((img) => (
                <Box key={img} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }}>
                  <Image
                    src={`/images/${img}`}
                    alt={img}
                    width={900}
                    height={500}
                    style={{ objectFit: 'cover', borderRadius: 12, cursor: 'pointer' }}
                    onClick={() => openLightbox(`/images/${img}`)}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        </motion.div>

        {/* ===== Divider between research & experience ===== */}
        <Box sx={{ width: '100%', mt: 5 }}>
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ width: '100%', height: 36 }}>
            <path d="M0 10 C30 0 70 10 100 0 L100 10 L0 10 Z" fill={theme.palette.primary.main} />
          </svg>
        </Box>

        {/* ===== Experience (staggered cards, logos interleaved) ===== */}
        <motion.div id='experience' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <Typography variant="h5" sx={{ mt: 2, color: theme.palette.primary.main, fontWeight: 700 }}>Experience</Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {experiences.map((exp, idx) => (
              <Grid item xs={12} md={4} key={exp.role} sx={{ transform: idx % 2 ? 'translateY(18px)' : 'translateY(0px)' }}>
                <motion.div whileHover={{ y: -6, boxShadow: '0 8px 30px rgba(0,0,0,0.35)' }} transition={{ duration: 0.25 }}>
                  <Card ref={el => experienceRefs.current[idx] = el} sx={{ minHeight: experienceHeight || 'auto', p: 2, backgroundColor: theme.palette.tertiary.main, color: '#fff', borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <Box sx={{ flex: '0 0 56px' }}>
                        {/* show first logo if exists */}
                        {exp.logos?.[0] && <Image src={`/images/${exp.logos[0]}`} alt={exp.company} width={56} height={56} style={{ borderRadius: 8 }} />}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{exp.role}</Typography>
                        <Typography variant="subtitle2">{exp.company}</Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>{exp.dates}</Typography>
                      </Box>
                    </Box>

                    <List dense sx={{ mt: 1 }}>
                      {exp.bullets.map((b, i) => <ListItem key={i} sx={{ pl: 0 }}>{b}</ListItem>)}
                    </List>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* ===== Awards & Community small section (optional) ===== */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
          <Typography variant="h5" sx={{ mt: 4, color: theme.palette.primary.main, fontWeight: 700 }}>Awards & Community</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 2, backgroundColor: theme.palette.tertiary.main, color: '#fff' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Highlights</Typography>
                <List dense>
                  <ListItem sx={{ pl: 0 }}>Salutatorian — Ursinus College Class of 2025</ListItem>
                  <ListItem sx={{ pl: 0 }}>Best Data Visualization — DataFest Philly (2024)</ListItem>
                  <ListItem sx={{ pl: 0 }}>Upsilon Pi Epsilon — Chapter President (2023)</ListItem>
                </List>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 2, backgroundColor: theme.palette.tertiary.main, color: '#fff' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Community & Leadership</Typography>
                <List dense>
                  <ListItem sx={{ pl: 0 }}>Inclusive Data Science Initiative — Ursinus</ListItem>
                  <ListItem sx={{ pl: 0 }}>Phi Kappa Sigma — Academic Chair & Leadership roles</ListItem>
                  <ListItem sx={{ pl: 0 }}>Volunteer: Leukemia & Lymphoma Society, AFSP, Special Olympics</ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* ===== Contact Me (form card) ===== */}
        <Box id="contact" sx={{ mt: 5 }}>
          <Divider sx={{ mb: 3, borderColor: theme.palette.primary.main }} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
              Contact
            </Typography>
            <Card sx={{ p: 2, backgroundColor: theme.palette.tertiary.main, color: '#fff' }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Interested in collaborating or hiring? Send a message — I’ll respond promptly.
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  label="Name"
                  fullWidth
                  variant="filled"
                  sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
                />
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  variant="filled"
                  sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
                />
                <TextField
                  name="message"
                  label="Message"
                  fullWidth
                  variant="filled"
                  multiline
                  rows={4}
                  sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
                />
                <Button type="submit" variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
                  Send
                </Button>
              </Box>
            </Card>
            </motion.div>

            {/* Snackbar notification */}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={4000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              sx={{
                '& .MuiPaper-root': {
                  boxShadow: '0 4px 10px rgba(0,0,0,0.35)', // soft shadow
                  borderRadius: 2, // optional rounding
                }
              }}
            >
              <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%', bgcolor: theme.palette.tertiary.main }}>
                Message failed to send!
              </Alert>
            </Snackbar>
          {/* ===== Gallery ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h5"
              sx={{ mt: 4, mb: 2, color: theme.palette.primary.main, fontWeight: 700 }}
            >
              Gallery
            </Typography>

            <ImageList
              variant="quilted"
              cols={4}
              rowHeight={160}
              gap={12}
            >
              {galleryImages.map((img, idx) => {
                // Mix of wide and tall images
                const layout = [
                  { cols: 2, rows: 2 }, // UPE2.JPG
                  { cols: 1, rows: 3 }, // XC2.png
                  { cols: 1, rows: 2 }, // Banner.JPG
                  { cols: 2, rows: 3 }, // Seniors.jpg
                  { cols: 1, rows: 3 },  // Little.png
                  { cols: 1, rows: 2 }  // XC6.JPG
                ][idx];

                return (
                  <ImageListItem key={idx} cols={layout.cols} rows={layout.rows} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                    <Image
                      src={`/images/${img}`}
                      alt={img}
                      width={layout.cols * 200} // approximate width
                      height={layout.rows * 160} // approximate height
                      onClick={() => openLightbox(`/images/${img}`)}
                      loading='lazy'
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        cursor: 'pointer'
                      }}
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </motion.div>
        </Box>
      </Container>
      


      {/* ===================== Floating Action Buttons ===================== */}
      {/* Contact FAB (opens contact modal) */}
      <Fab color="primary" aria-label="contact" onClick={openContact}
        sx={{ position: 'fixed', right: 24, bottom: 24, zIndex: 1400 }}>
        <ContactMailIcon />
      </Fab>

      {/* Scroll-to-top mini FAB */}
                
      <AnimatePresence>
        {showScrollTop && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
            <Fab size="small" color="info" onClick={scrollToTop} sx={{ position: 'fixed', right: 24, bottom: 96, zIndex: 1400 }}>
              <KeyboardArrowUpIcon />
            </Fab>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== Contact Modal ===================== */}
      <Modal open={contactOpen} onClose={closeContact} aria-labelledby="contact-modal" >
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: { xs: '92%', sm: 520 }, bgcolor: theme.palette.background.default, color: theme.palette.text.secondary,
          p: 3, borderRadius: 2, boxShadow: 24
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Contact Me</Typography>
            <IconButton onClick={closeContact} size="small" sx={{ color: theme.palette.text.secondary }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box component="form" onSubmit={(e)=>{ e.preventDefault(); closeContact(); }} sx={{ display: 'grid', gap: 2 }}>
            <TextField label="Name" variant="filled" sx={{ background: '#fff', fontWeight: 700 }} fullWidth />
            <TextField label="Email" variant="filled" sx={{ background: '#fff', fontWeight: 700 }} fullWidth />
            <TextField label="Message" variant="filled" sx={{ background: '#fff', fontWeight: 700 }} multiline rows={4} fullWidth />
            <Button type="submit" variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>Send</Button>
          </Box>
        </Box>
      </Modal>

      {/* ===================== Lightbox (image preview) ===================== */}
      <AnimatePresence>
        {lightboxSrc && (
          <Modal open onClose={closeLightbox} closeAfterTransition>
            <Box sx={{
              position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.78)', zIndex: 1500, p: 2
            }}>
              <motion.div
                key={lightboxSrc}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={lightboxVariant}
                style={{ width: '100%', maxWidth: 1100, borderRadius: 12, overflow: 'hidden' }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: { xs: '60vh', md: '75vh' } }}>
                  <Image src={lightboxSrc} alt="Preview" fill style={{ objectFit: 'contain' }} />
                  <IconButton onClick={closeLightbox} sx={{ position: 'absolute', top: 10, right: 10, color: '#fff', background: 'rgba(0,0,0,0.3)' }}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </Box>
          </Modal>
        )}
      </AnimatePresence>

    </Box>
  );
}
