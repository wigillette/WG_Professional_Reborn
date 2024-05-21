import React from 'react';
import styles from './Carousel.module.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({images}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  return <Box className={styles.carousel} sx={{flexGrow: 1, margin: '0 auto', mt: 5 }}>
      <Paper
        elevation={2}
        sx={{
          bgcolor: 'background.default',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
          borderRadius: '5% 5% 0 0'
        }}
      >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={5000}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={index} overflow={'hidden'}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Image 
                  alt={step.desc}
                  width={600} 
                  height={450} 
                  loading='lazy'
                  src={step.imgPath} 
                  sizes='100%'
                  style={
                    {
                      width: '100%',
                      display: 'block',
                      overflow: 'hidden',
                      objectFit: 'cover',
                      minWidth: '100%',
                      border: '1px ridge #fff', 
                      borderRadius: '5% 5% 0 0', 
                    }
                  }
                  />
                  <Typography fontFamily='Poppins' bgcolor='#000' textOverflow='ellipsis' width='100%' fontWeight={300} sx={{opacity: 0.8, position: 'absolute', bottom: 0, padding: '15px'}}>
                    {step.desc}
                  </Typography>
                </>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="sticky"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            sx={{fontFamily: 'Poppins'}}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{fontFamily: 'Poppins'}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      </Paper>
    </Box>
};

export default Carousel;