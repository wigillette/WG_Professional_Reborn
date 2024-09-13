/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./page.module.css";
import Fade from "@mui/material/Fade";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme"
import CssBaseline from "@mui/material/CssBaseline";
import { Parallax } from "react-parallax";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Backdrop from "@mui/material/Backdrop";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Collapse from "@mui/material/Collapse";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Table from "@mui/material/Table"
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FadeInSection from "@/components/FadeInSection/FadeInSection";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider"
import Modal from "@mui/material/Modal";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Web from "@mui/icons-material/Web";
import Download from "@mui/icons-material/Download";
import YouTube from "@mui/icons-material/Youtube";
import {actions, actionImages, actionInfo} from "../shared/data/actions";
import skills from "../shared/data/skills";
import bio from "../shared/data/bio";
import { relevantCourses, courseInfo } from "../shared/data/courses";
import Info from '@mui/icons-material/Info';
import Paper from "@mui/material/Paper";
import projects from "../shared/data/projects";
import Carousel from "@/components/Carousel/Carousel";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import carouselImages from "@/shared/data/carousel";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


const WGParallax = () => (
  <div className={styles.banner} id='home'>
    <Parallax blur={{min:-30,max:30}} bgImage="/images/Banner.jpg" strength={250} className={styles.parallax}>
      <div/>
    </Parallax>
  </div>
)

const StyledDivider = (props) => (
  <Divider sx={{bgcolor:'#252525', mt:'1.5rem', ...props}} component='div' variant='middle'/>
)

const WGAppBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const tabs = ['Home', 'Achievements', 'Aspirations'];
  const toggleDrawerOpen = (isOpen) => {
    setDrawerOpen(isOpen);
  }
  
  return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" color='secondary'>
      <Toolbar variant="dense">
        <IconButton sx={{ mr: 2, display: { sm: 'none' } }} edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawerOpen(!drawerOpen)}>
          <Menu/>
        </IconButton>
        <Typography variant="h6" color="inherit" component="div" fontFamily={'Poppins'} fontWeight={'bold'}>
          William C. Gillette
        </Typography>
        <Box ml={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {tabs.map((item) => (
              <Button key={item} href={`#${item.toLowerCase()}`} sx={{ml: 2, fontFamily: 'Poppins', fontWeight: 300}}>
                {item}
              </Button>
            ))}
          </Box>
      </Toolbar>
    </AppBar>
    <Drawer className={styles.mobileDrawer} open={drawerOpen} onClose={() => toggleDrawerOpen(false)} PaperProps={{
      sx: {
        bgcolor: 'background.default'
      }
     }}>
      <Box sx={{width: '100%'}} role='presentation'>
        <Avatar sx={{margin: '1rem', ml: '2rem'}} src='/images/Headshot.jpg' alt='William C. Gillette'></Avatar>
        <Divider sx={{bgcolor: '#252525'}} component='div' variant='fullWidth'/>
        <List>
          {tabs.concat(['Projects']).map((item) => (
            <>
              <ListItem key={item}>
                <ListItemButton key={item} href={`#${item.toLowerCase()}`} sx={{fontFamily: 'Poppins', fontWeight: 300, textAlign: 'center'}}>
                  {item}
                </ListItemButton>
              </ListItem>
              <Divider sx={{bgcolor: '#252525'}} component='div' variant='fullWidth'/>
            </>
          ))}
        </List>
      </Box>
    </Drawer>
  </Box>)
}

export default function Home() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [currentAction, setAction] = React.useState(0);
  const [currentSub, setSub] = React.useState(0);
  const [courseOpenId, setCourseOpenId] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [projectDescLines, setProjectDescLines] = React.useState(new Array(projects.length).fill(6));

  const toggleProjectDesc = (id) => {
    const newProjectDescLines = projectDescLines.map((descLine, index) => {
      let toReturn = descLine
      if (index == id) {
          toReturn = descLine == 6 ? 18 : 6;
      }
      return toReturn
    });
    setProjectDescLines(newProjectDescLines)
  }

  const handlePage = (event, page) => {
    setPage(page);
  }

  const handleAction = (event,action) => {
    setAction(action)
  }
  const handleCourseOpen = (event, courseId) => {
    if (courseOpenId == courseId) {
      setCourseOpenId('')
    } else {
      setCourseOpenId(courseId);
    }
  }

  const handleSub = (event, sub) => {
    setSub(sub)
  }

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <CssBaseline/>   
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <WGAppBar/>
          <WGParallax/>  
          <FadeInSection>
            <div className={styles.head_block}>
              <Avatar
                className={styles.head} 
                alt='William C. Gillette'
                src={"/images/Headshot.jpg"}
                sx={{margin: '3vh auto'}}>
              </Avatar>
              <div>
                <Box sx={{margin: '0.75rem', textAlign: 'center'}}>
                  <a href='/documents/WG_CV.pdf'>
                    <Button color='info' variant='contained' sx={{fontFamily:'Poppins'}}><Download/> Resume</Button>
                  </a>
                </Box>
                <Box>
                  <Typography variant='h6' fontWeight={'bold'} textAlign={'center'} fontFamily={'Poppins'} mb={'0.5rem'}>wgillette02@gmail.com</Typography>
                  <Stack direction={'row'} justifyContent='center' marginTop={'0.5rem'} marginBottom={'0.5rem'}>
                    <IconButton color="info" href="https://www.facebook.com/william.gillette.3152" target="_blank" rel="noopener noreferrer">
                      <Facebook/> 
                    </IconButton>
                    <IconButton color="info" href="https://www.linkedin.com/in/williamcgillette" target="_blank" rel="noopener noreferrer">
                      <LinkedIn/>
                    </IconButton>
                    <IconButton color="info" href="https://www.github.com/wigillette" target="_blank" rel="noopener noreferrer">
                      <GitHub/>
                    </IconButton>
                  </Stack>
                </Box>
                <Box width={{xs: '90vw', sm: '60vw'}} margin='0 auto' className={styles.skillBank}>
                  <Stack direction={'row'}  justifyContent='center' margin='0 auto' sx={{flexWrap: 'wrap'}}>
                    {skills.map((skill) => <Chip key={skill} className={styles.skillChip} variant='outlined' label={skill} sx={{fontFamily: 'Poppins', margin: 0.5, fontWeight: 300}} />)}
                  </Stack>
                </Box>
              </div>
            </div>
          </FadeInSection>
          <StyledDivider/>         
          <Box width={'90vw'} margin='0 auto' mb='3rem' mt='2rem' id='aspirations'>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} >
                  <Stack spacing='1rem' direction='column'>
                    <FadeInSection>
                      <Grid container spacing='1rem'>
                        <Grid item xs={12} sm={6} className={styles.biographyContainer}>
                          <Carousel images={carouselImages}/>
                        </Grid>
                        <Grid item xs={12} sm={6} className={styles.biographyContainer}>
                          <Paper elevation={2} sx={{bgcolor: '#252525'}}>
                            <Box margin='1rem'>
                              <Typography variant='h6' pt='1rem' fontFamily={'Poppins'} fontWeight={'300'} gutterBottom>Biography</Typography>
                              {bio.map((p) => <Typography fontFamily={'Poppins'} pb='1rem' color='text.secondary'>{p}</Typography>)}
                            </Box>
                          </Paper>
                        </Grid>
                      </Grid>
                    </FadeInSection>
                    <FadeInSection>
                      <TableContainer>
                        <Table stickyHeader>
                          <TableHead>
                            <TableRow>
                              {["ID", "Course"].map((header) => (<TableCell key={header.toLowerCase()} align='center'>
                                <Typography variant='h6' fontFamily={'Poppins'} fontWeight='300'>{header}</Typography>
                              </TableCell>))}
                            </TableRow>
                          </TableHead> 
                          <TableBody>
                            {relevantCourses.slice(page * 5, page * 5 + 5).map((course) => course in courseInfo ? (
                              <React.Fragment key={course}>
                                <TableRow hover>
                                  <TableCell onClick={(e) => handleCourseOpen(e, course)}>
                                    <Typography className={styles.courseOpenButton} variant='h6' color='text.primary' fontFamily='Poppins' fontWeight='300'>{course}</Typography>
                                  </TableCell>
                                  <TableCell>
                                    <Typography color='text.secondary' fontFamily='Poppins'>{courseInfo[course][0]}</Typography>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell sx={{paddingBottom: 0, paddingTop: 0}} colSpan={3}>
                                    <Collapse in={courseOpenId==course} timeout="auto" unmountOnExit>
                                      <Box sx={{mt: '1rem', mb: '1rem'}}>
                                        <Typography color='text.primary' fontFamily='Poppins'>{courseInfo[course][2]}</Typography>
                                      </Box>
                                    </Collapse>
                                  </TableCell>
                                </TableRow>
                              </React.Fragment>) : <div key={course}/>)}
                          </TableBody>
                          <TableFooter>
                            <TableRow>
                              <TableCell align="left" sx={{display: {xs: 'none', sm: 'block'}}}>
                                <Box sx={{textAlign: 'center'}}>
                                  <a href='/documents/WG_Transcript.pdf'>
                                    <Button color='info' variant='contained' sx={{fontFamily:'Poppins'}}><Download/> Transcript</Button>
                                  </a>
                                </Box>
                              </TableCell>
                              <TablePagination rowsPerPage={5} count={relevantCourses.length} page={page} className={styles.coursePages} onPageChange={handlePage}/>
                            </TableRow>
                          </TableFooter>
                        </Table>
                      </TableContainer>
                    </FadeInSection>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FadeInSection>
                    <Grid container spacing={1}>
                      {projects.map((project) => (
                        <Grid key={project.title} item xs={12} sm={6}>
                          <Card component={Paper} sx={{bgcolor: '#252525', height: '100%'}}>
                            <CardHeader title={<Typography width='90%' fontFamily='Poppins' color='text.primary' fontWeight='bold'>{project.title}</Typography>} subheader={<Typography fontFamily='Poppins' fontWeight={300} color='text.secondary'>{project.date}</Typography>}/>
                            <CardMedia component='img' src={project.thumb} height='200px'/>
                            <CardContent>
                              <Typography variant="body1" mb='1rem' component={Box} fontFamily='Poppins' color="text.secondary" overflow={'hidden'} sx={{display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: projectDescLines[project.id]}}>
                                {project.desc}
                              </Typography>
                              <Grid container spacing='0.5rem' sx={{position: 'sticky', top: '90%'}}>
                                {project.skills.map((skill) => (
                                  <Grid item xs={6} sm={6} key={skill}>
                                    <Chip sx={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)', width: '100%', whiteSpace: 'wrap', bgcolor: '#1e90ff', fontFamily: 'Poppins', fontWeight: 300, color: 'text.secondary'}}  label={skill}/>
                                  </Grid>
                                ))}
                              </Grid>
                            </CardContent>
                            {Object.keys(project).includes('media') && 
                              <CardActions sx={{position: 'sticky', top: '100%'}} disableSpacing>
                                {Object.keys(project.media).includes('site') && 
                                  <IconButton color='info' href={project.media.site}>
                                    <Web/>
                                  </IconButton>
                                }
                                {Object.keys(project.media).includes('video') && 
                                  <IconButton color='error' href={project.media.video}>
                                    <YouTube/>
                                  </IconButton>
                                }
                                <IconButton className={styles.descToggle} onClick={() => toggleProjectDesc(project.id)} color='primary' sx={{ml: 'auto', transform: projectDescLines[project.id] != 6 ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                                  <KeyboardArrowDown/>
                                </IconButton>
                              </CardActions>
                            }
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </FadeInSection>
                </Grid>
              <StyledDivider/>
              <FadeInSection>
                <Box width={'90vw'} margin='0 auto' mt='2rem' mb='3rem' className={styles.actionBank} id='achievements'>
                  <Tabs value={currentAction} className={styles.actionTabs} onChange={handleAction}>
                    {actions.map((action) => <Tab key={action.id} sx={{fontFamily: 'Poppins', fontWeight: 300}} icon={action.icon} label={action.title} />)}
                  </Tabs>
                  <Box component='div' sx={{mt: '1rem', justifyContent: 'center'}}>
                    <Grid container spacing={1}>
                      <Grid className={styles.actionImages} item xs={0} sm={6}>
                        <ImageList variant='quilted' cols={2} rowHeight={300} sx={{width: '100%', mb: '1rem', mt: '1rem', mr: '2rem'}}>
                          {currentAction != null && currentAction in actionImages && actionImages[currentAction].map((imageItem) => (
                            <ImageListItem key={imageItem.img} cols={imageItem.cols || 1} rows={imageItem.rows || 1}>
                              <Image  alt=''  src={`${imageItem.img}`} fill={true} style={{objectFit: 'cover'}}/>
                            </ImageListItem>
                          ))}
                        </ImageList>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <List sx={{width: '100%', height: '100%', bgcolor: '#252525', borderRadius: '10px', boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2)', mt: '1rem'}}>
                          {currentAction != null && currentAction in actionInfo && actionInfo[currentAction].map((info, index) => (
                            <React.Fragment key={index}>
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>{info.icon}</ListItemAvatar>
                                <ListItemText
                                  primary={<Typography fontFamily='Poppins' fontWeight={300} variant='h6'>{info.title}</Typography>}
                                  secondary={
                                    <Typography
                                      className={styles.actionDesc}
                                      component="span"
                                      variant="body1"
                                      fontFamily='Poppins'
                                      color="text.primary"
                                    >
                                      {info.desc}
                                    </Typography>
                                  }/>
                                  <IconButton className={styles.mobileAction} sx={{ml: '1rem'}} onClick={(event) => {handleModalOpen(); handleSub(event, index);}}>
                                    <Info/>
                                  </IconButton>
                              </ListItem>
                              {index < actionInfo[currentAction].length-1 && <Divider sx={{backgroundColor: 'white'}} variant='middle' component='li'/>}
                            </React.Fragment>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </FadeInSection>
              <Modal
                  open={modalOpen}
                  onClose={handleModalClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                >
                <Fade in={modalOpen}>
                    <Box className={styles.actionContainer} key={'modal'} sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)',
                      bgcolor: 'background.default',
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                      borderRadius: '10px',
                      p: 4
                    }}
                    >
                      <Typography variant='h6' component='h2' mb={'1rem'} fontFamily='Poppins' fontWeight={'bold'}>
                        {currentAction in actionInfo && currentSub in actionInfo[currentAction] ? actionInfo[currentAction][currentSub].title : ''}
                      </Typography>
                      <Typography fontFamily='Poppins'>
                        {currentAction in actionInfo && currentSub in actionInfo[currentAction] ? actionInfo[currentAction][currentSub].desc : ''}
                      </Typography>
                  </Box>  
                </Fade>
              </Modal>
            </Grid>
          </Box>
        </main>
      </ThemeProvider>
    </>
  );
}