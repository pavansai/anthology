import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Exp.css';
import windstream from './Images/windstream.png';
import murphyusa from './Images/murphyusa.png';
import merckgroup from './Images/merckgroup.png';
import anz from './Images/anz.png';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'flex-start',
  color: theme.palette.text.secondary,
  borderRadius: '8px',
  boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)',
  border: '0.9px solid #e0e0e0',
  background: '#ffffff',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  animation: 'fadeInUp 2s ease-out forwards',
  '&:nth-of-type(1)': { animationDelay: '0s' },
  '&:nth-of-type(2)': { animationDelay: '0.1s' },
  '&:nth-of-type(3)': { animationDelay: '0.1s' },
  '&:nth-of-type(4)': { animationDelay: '0.1s' },
  '&:hover': {
    transform: 'scale(1.03)',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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
}));

const ImageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px',
  height: '80px',
  marginLeft: '8px',
  [theme.breakpoints.down('lg')]: {
    marginLeft: 0,
    justifyContent: 'flex-start',
  },
}));

export default function Experience() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Center the content vertically
        width: '80%',
        margin: '0 auto',
        paddingTop: 4, // Add padding if needed
        paddingBottom: 4, // Add padding if needed
      }}
    >
      <Grid container rowSpacing={6} columnSpacing={6}>
        <Grid item xs={12} sm={6}>
          <Item>
            <TextWrapper>
              <Typography variant="h6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', color: 'black' }}>
                Windstream
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                Java Full Stack Developer
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                <br />
                Oct 2023 - Present
              </Typography>
            </TextWrapper>
            <ImageWrapper>
              <img
                className="image-adjustment"
                src={windstream}
                alt="Windstream"
                style={{ maxHeight: '80px', maxWidth: '100%', borderRadius: '10px' }}
              />
            </ImageWrapper>
          </Item>
        </Grid>

        {/* Other experience items */}
        <Grid item xs={12} sm={6}>
          <Item>
            <TextWrapper>
              <Typography variant="h6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', color: 'black' }}>
                Murphy USA
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                Java Full Stack Developer
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                <br />
                Nov 2022 - Sep 2023
              </Typography>
            </TextWrapper>
            <ImageWrapper>
              <img
                className="image-adjustment"
                src={murphyusa}
                alt="Murphy USA"
                style={{ maxHeight: '80px', maxWidth: '100%', borderRadius: '10px' }}
              />
            </ImageWrapper>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Item>
            <TextWrapper>
              <Typography variant="h6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', color: 'black' }}>
                Merck Group
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                Java Full Stack Developer - Full-time
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                <br />
                Jul 2020 - Jul 2022
              </Typography>
            </TextWrapper>
            <ImageWrapper>
              <img
                className="image-adjustment"
                src={merckgroup}
                alt="Merck Group"
                style={{ maxHeight: '80px', maxWidth: '100%', borderRadius: '10px' }}
              />
            </ImageWrapper>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Item>
            <TextWrapper>
              <Typography variant="h6" style={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', color: 'black' }}>
                ANZ
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                Java Developer - Full-time
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'lighter', fontFamily: '"Inter", sans-serif' }}>
                <br />
                Mar 2019 - Jun 2020
              </Typography>
            </TextWrapper>
            <ImageWrapper>
              <img
                className="image-adjustment"
                src={anz}
                alt="ANZ"
                style={{ maxHeight: '80px', maxWidth: '100%', borderRadius: '10px' }}
              />
            </ImageWrapper>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
