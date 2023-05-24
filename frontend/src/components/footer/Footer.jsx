import React from 'react'
import './footer.css'

import { Container ,Row, Col , ListGroup, ListGroupItem } from 'reactstrap'

import {Link} from 'react-router-dom';

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'Chef de département'
  },
  {
    path:'/tours',
    display:'Admin'
  },
];

const quick__links2=[
 
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
];

const Footer = () => {


const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
      <Row>
      
      <Col lg='3'>
          <h5 className='footer__link-title'>Discover</h5>

          <ListGroup className='footer__quick-links'>
          {quick__links.map((item,index) => (
         <ListGroupItem key={index} className='ps-0 border-0'>
              <Link to={item.path} >{item.display}</Link>
            </ListGroupItem>
          ))}
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Quick Links</h5>
        <ListGroup className='footer__quick-links'>
        {quick__links2.map((item,index) => (
            <ListGroupItem key={index} className='ps-0 border-0'>
            <Link to={item.path} >{item.display}</Link>
          </ListGroupItem>
          ))}
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Contact</h5>
        <ListGroup className='footer__quick-links'>
         
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
             <h6 className='mb-0 d-flex align-items-center gap-2'>
              <span><i class="ri-map-pin-line"></i></span>
              adrdress:
             </h6>

             <p className='mb-0'>tunisie</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
             <h6 className='mb-0 d-flex align-items-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
              Email:
             </h6>

             <p className='mb-0'>oumaima-ilef01@gmail.com</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
             <h6 className='mb-0 d-flex align-items-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
              Phone:
             </h6>

             <p className='mb-0'>56680358</p>
            </ListGroupItem>
       
          </ListGroup>
        </Col>

        <Col lg='12' className='text-center pt-5'>
        <p className='copyright'>copyright {year} design and develop by oumaima & ilef  </p>

        </Col>
      </Row>
      </Container>
    </footer>
  );
};
export default Footer;
