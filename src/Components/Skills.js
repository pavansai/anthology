import React from 'react';
import { Box, Typography, Chip, Grid } from '@mui/material';

const Skills = () => {
  const languages = ['Java', 'JavaScript', 'C++', 'Python', 'TypeScript', 'Go', 'Ruby'];
  const frontend = ['HTML5/CSS', 'ReactJS', 'Angular', 'TailwindCSS', 'Vue.js', 'SASS', 'Bootstrap'];
  const frameworks = ['Spring Boot', 'Django', 'React Native', 'Node.js', 'Next.js', 'Express', 'Flask', 'Koa'];
  const tools = [
    'SQL', 'MongoDB', 'NoSQL', 'Git', 'GitLab', 'AWS', 'Kafka', 'Google Cloud', 
    'Docker', 'Kubernetes', 'Jenkins', 'Postman', 'ElasticSearch'
  ];
  const others = [
    'Data Structures', 'Object-Oriented Design', 'Design Patterns', 'Microservices', 'REST APIs', 'GraphQL', 
    'Testing/Debugging', 'CI/CD', 'Agile Methodologies', 'Version Control'
  ];

  const getChipColor = (skill) => {
    const colorMap = {
      languages: '#b1b3e6',
      frontend: '#AED2FF',
      frameworks: '#88AB8E',
      tools: '#D0BFFF',
      others: '#ffa07a',
    };
    const category = Object.keys(colorMap).find((cat) =>
      eval(cat).includes(skill)
    );

    return colorMap[category] || '#e0e0e0';
  };

  return (
    <div className="skills">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 64px)',
          marginLeft: '10%',
          p: 4,
          pl: { xs: 2, sm: '10%' },
          pr: { xs: 2, sm: '10%' },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography className="animated-paragraph" variant="h6" sx={{ mb: 1, color: 'black' }}>
                Languages
              </Typography>
              <Box className="animated-paragraph" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {languages.map((language) => (
                  <Chip
                    key={language}
                    label={language}
                    sx={{ backgroundColor: getChipColor(language), color: 'Black' }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography className="animated-paragraph" variant="h6" sx={{ mb: 1, color: 'black' }}>
                Frontend
              </Typography>
              <Box className="animated-paragraph" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {frontend.map((framework) => (
                  <Chip
                    key={framework}
                    label={framework}
                    sx={{ backgroundColor: getChipColor(framework), color: 'Black' }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography className="animated-paragraph" variant="h6" sx={{ mb: 1, color: 'black' }}>
                Backend/Libraries
              </Typography>
              <Box className="animated-paragraph" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {frameworks.map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    sx={{ backgroundColor: getChipColor(tool), color: 'Black' }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography className="animated-paragraph" variant="h6" sx={{ mb: 1, color: 'black' }}>
                Database/Cloud/Tools
              </Typography>
              <Box className="animated-paragraph" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {tools.map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    sx={{ backgroundColor: getChipColor(tool), color: 'Black' }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography className="animated-paragraph" variant="h6" sx={{ mb: 1, color: 'black' }}>
                Others
              </Typography>
              <Box className="animated-paragraph" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {others.map((tool) => (
                  <Chip
                    key={tool}
                    label={tool}
                    sx={{ backgroundColor: getChipColor(tool), color: 'Black' }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Skills;
