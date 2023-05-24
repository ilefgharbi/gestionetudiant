import React, {useState, useEffect} from 'react';
import CommonSection from '../shared/CommonSection';

import '../styles/Tours.css';
import SearchBar from './../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import { Container, Row ,Col } from 'reactstrap';

import useFetch from '../hooks/useFetch';

const Tours = () => {
return (
  <>
     <CommonSection title={'admin'} />
      <section>
        <Container>
            <Row>
              <SearchBar />
            </Row>
          </Container>
          </section>
     
          <Newsletter />
          </>
      );    
    };
export default Tours;