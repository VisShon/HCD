import React, { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import '../../styles/eventsCarousel.css';

// Events Image Imports
import img1 from '../../assets/events/event_5.png';
import img2 from '../../assets/events/event_10.jpg';
import img3 from '../../assets/events/event_14.jpg';
import img4 from '../../assets/events/event_17.jpg';
import img5 from '../../assets/events/event_22.jpg';
import img6 from '../../assets/events/event_26.jpg';
import img7 from '../../assets/events/event_27.jpg';
import img8 from '../../assets/events/event_31.jpg';
import img9 from '../../assets/events/event_36.jpg';
import img10 from '../../assets/events/event_43.jpg';
import img11 from '../../assets/events/event_47.jpg';
import img12 from '../../assets/events/event_53.jpg';
import img13 from '../../assets/events/event_58.jpg';
import img14 from '../../assets/events/event_63.jpg';
import img15 from '../../assets/events/event_65.jpg';

// Events Data
const slides = [
  { src: img1, title: '1-Pixel Design Conference - Second Edition', details: '6-7 January 2024' },
  { src: img2, title: 'Accessible Travel', details: '20th Sep 2023' },
  { src: img3, title: 'Artificial Intelligence in Industrail sector', details: 'October 2023' },
  { src: img4, title: 'Defiance, Disobedience, Revolution', details: '11th May 2023' },
  { src: img5, title: 'Open house Discussion', details: '1st September 2023' },
  { src: img6, title: "Unleashing Creativity: Design360 x 1Pixel's Designathon Draws Attention (Esya Fest)", details: '25th & 26th August, 2023' },
  { src: img7, title: 'Second National Artists Workshop', details: '15th to 17th September 2023' },
  { src: img8, title: "Building Semantic Competence Using Multiple AI Substrates by Prof. Larry Birnbaum", details: '11th August 2023' },
  { src: img9, title: '3-day Artist Camp - Second National Painting Workshop', details: '15th -17th September 2024' },
  { src: img10, title: "Workshop on Photography", details: '04 March 2024' },
  { src: img11, title: 'Past Failure and the Promising Future of Human-Centered Design ', details: '10 November 2023' },
  { src: img12, title: "Heterogenous Benchmarking across Domains and Languages: The Key to Enable Meaningful Progress in IR Research", details: '24 January 2024' },
  { src: img13, title: "Visit the National Gallery Of Modern Art ", details: '30 January 2024' },
  { src: img14, title: "Hands-On Workshop on  Envision AR - Design and Development of Augmented Reality applications", details: '20-21 January 2024' },
  { src: img15, title: "Research Opportunities at NII, Japan ", details: '02 February 2024' }
];

function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Box 
      className="carousel-container" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <IconButton className="carousel-prev" onClick={handlePrev}>
        <ArrowBack />
      </IconButton>
      <Card className="carousel-card">
        <CardMedia
          component="img"
          height="300"
          image={slides[currentIndex].src}
          alt={slides[currentIndex].title}
          className="carousel-image"
        />
        <CardContent className="carousel-content">
          <Typography variant="h6" component="div" className="carousel-title">
            {slides[currentIndex].title}
          </Typography>
          <Typography variant="body2" component="p" className="carousel-details">
            {slides[currentIndex].details}
          </Typography>
        </CardContent>
      </Card>
      <IconButton className="carousel-next" onClick={handleNext}>
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

export default Carousel;