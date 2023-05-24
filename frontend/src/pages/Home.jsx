import React from 'react';
import '../styles/home.css';
import {Container,Row,Col} from 'reactstrap';


import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
<>


  {/* ======== gallery section start =========== */} 
<section>
  <Container>
    <Row>
     
      <Col lg='12'>
       <MasonryImagesGallery />
      </Col>
    </Row>
  </Container>
</section>
  <Newsletter />
  
  
  </>
);
};

export default Home;
