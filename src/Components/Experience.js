import React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Exp.css';
import bridgeflair from './Images/bridgeflair.png';
import impetus from './Images/impetus.png';
import blank from './Images/blank.png';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'flex-start',
    color: theme.palette.text.secondary,
    borderRadius: '9px',
    boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0)',
    height: 'auto',
    minHeight:'150px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    animation: 'fadeInUp 1s ease-out forwards',
    '&:nth-of-type(1)': { animationDelay: '0s' },
    '&:nth-of-type(2)': { animationDelay: '0s' },
    '&:nth-of-type(3)': { animationDelay: '0s' },
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }));
  
  const TextWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
      overflow: 'visible',
      whiteSpace: 'normal',
      wordBreak: 'break-word',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      overflow: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
    },
  }));
  
  const ImageWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: '100px',
    maxWidth: '100px',
    marginLeft: '8px',
    [theme.breakpoints.down('lg')]: {
      marginLeft: 0,
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '8px',
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '8px',
      justifyContent: 'flex-end',
    },
  }));
export default function Experience() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '60%',
        margin: '0 auto',
        marginLeft:'15%'
      }}
    >
      <Grid container rowSpacing={6} columnSpacing={6}>
        <Grid item xs={12} sm={6}>
          <Item>
            <TextWrapper>
              <Typography className='animated-paragraph'variant="h6" style={{fontFamily: '"Inter", sans-serif', fontWeight: 'bold', color: 'black' }}>
                Bridgeflair
              </Typography>
              <Typography className='animated-paragraph' variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif',}}>
                Backend engineer, Intern
              </Typography>
              <Typography className='animated-paragraph' variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                <br></br>
                Dec '23 - Mar '24
              </Typography>
            </TextWrapper>
            <ImageWrapper>
              <img
                className="image-adjustment" className='animated-paragraph'
                src={bridgeflair}
                alt="Bridgeflair"
                style={{ maxHeight: '80px', maxWidth: '100%', borderRadius: '10px' }}
              />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Item>
            <TextWrapper>
              <Typography className='animated-paragraph'variant="h6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', color: 'black' }}>
                Impetus
              </Typography>
              <Typography className='animated-paragraph'variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                SWE Intern
              </Typography>
              <Typography className='animated-paragraph'variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
              <br></br>
                May '19 - Aug '19
              </Typography>
            </TextWrapper>
            <ImageWrapper>
              <img
                className="image-adjustment" className='animated-paragraph'
                src={impetus}
                alt="impetus"
                style={{ maxHeight: '90px', maxWidth: '100%', borderRadius: '10px' }}
              />
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Item>
            <TextWrapper>
              <Typography className='animated-paragraph'variant="h6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', color: 'black' }}>
                Ibsoft
              </Typography>
              <Typography className='animated-paragraph'variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                Software Engineer (12 week Intern + Full Time)
              </Typography>
              <Typography className='animated-paragraph'variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
              <br></br>
                Jan '20 - Dec '22
              </Typography>
            </TextWrapper>
            <ImageWrapper>
              <img
                className="image-adjustment" className='animated-paragraph'
                src={blank}
                alt="blank"
                style={{ maxHeight: '90px', maxWidth: '100%', borderRadius: '10px' }}
              />
            </ImageWrapper>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
