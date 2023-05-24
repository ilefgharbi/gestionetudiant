import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl: weatherImg,
        title: 'calculate weather',
        desc: 'lorem ipsum dolor sit amet, consectetur adipisicing elite.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'lorem ipsum dolor sit amet, consectetur adipisicing elite.',
    },
    {
        imgUrl: customizationImg,
        title: 'customization ',
        desc: 'lorem ipsum dolor sit amet, consectetur adipisicing elite.',
    },


]

const serviceList = () => {
  return (
   <>
     {servicesData.map((item, index)=>(
       <Col lg='3' key={index}>
          <ServiceCard item={item} />
       </Col> 
     ))}
   </>
  );
};

export default serviceList;
