import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Container, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const Root = styled(Container)(({ theme }) => ({
  backgroundColor: '#111',
  color: '#fff',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: "'Playfair Display', serif",
}));

const AboutImage = styled(CardMedia)(({ theme }) => ({
  height: 600,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const AboutText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 50,
  left: 50,
  color: '#fff',
}));

const AwardCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#222',
  color: '#fff',
  margin: '20px',
}));

const Footer = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  textAlign: 'center',
  fontFamily: "'Playfair Display', serif", // Apply Playfair Display font here
}));

const About = () => {
  return (
    <Root>
      <Grid container>
        <Grid item xs={12} md={6}>
          <AboutImage
            image="https://source.unsplash.com/featured/?sushi"
            title="About Image"
          />
          <AboutText>
            <Typography variant="h3" style={{ fontFamily: "'Playfair Display', serif", marginLeft: "120px" }}>ABOUT</Typography>
          </AboutText>
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: '20px' }}>
          <Typography variant="h4" style={{ fontFamily: "'Playfair Display', serif" }}>Sushi Artistry Redefined</Typography>
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.
          </Typography>
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={4}>
              <AwardCard>
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={1}>
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} style={{ color: '#ffd700' }} />
                    ))}
                  </Box>
                  <Typography variant="h6">Trip Advisor</Typography>
                  <Typography variant="body2">Best Steak House Prague</Typography>
                </CardContent>
              </AwardCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <AwardCard>
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={1}>
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} style={{ color: '#ffd700' }} />
                    ))}
                  </Box>
                  <Typography variant="h6">Michelin Guide</Typography>
                  <Typography variant="body2">Best Steak House Prague</Typography>
                </CardContent>
              </AwardCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <AwardCard>
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={1}>
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} style={{ color: '#ffd700' }} />
                    ))}
                  </Box>
                  <Typography variant="h6">Star Dining</Typography>
                  <Typography variant="body2">Best Steak House Prague</Typography>
                </CardContent>
              </AwardCard>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '40px' }}>Our Story</Typography>
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over the years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.
          </Typography>
        </Grid>
      </Grid>
      <Footer>
        <Typography>By Chef John | License | Sitemap</Typography>
      </Footer>
    </Root>
  );
};

export default About;
