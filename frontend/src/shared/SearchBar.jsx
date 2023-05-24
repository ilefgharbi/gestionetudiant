import React,{useRef } from 'react';
import './Search-Bar.css'
import { Col,Form,FormGroup } from 'reactstrap';

import { BASE_URL } from './../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate()


    const searchHandler = async() => {
        const location =locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value   

        if(location === '' || distance === '' || maxGroupSize === ''){
            return alert("all fields are required!")
        }

        const res = await fetch(`${BASE_URL}/Tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

        if (!res.ok) alert ('something went wrong')

        const result = await res.json()

        navigate(`/Admin/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: result.data})

    };


  return <Col lg='12'>
    <div className='search__bar'>
      <Form className='d-flex align-items-center gap-4'>
      <FormGroup className='d-flex gap-3 from__group form__group-last'>
            <span><i class="ri-group-line"></i></span>
            <div>
                <h6>classe</h6>
                <h8 ref={maxGroupSizeRef}> DSI2</h8>
            </div>
          </FormGroup>

          <FormGroup className='d-flex gap-3 from__group form__group-last'>
            <span><i class="ri-group-line"></i></span>
            <div>
                <h6>emploi</h6>
                <input type ="file" placeholder='' ref={maxGroupSizeRef}/>
            </div>
          </FormGroup>
          <button  type='submit'>Submit</button>
         
      </Form>
    </div>
    <form action="">
    <FormGroup className='d-flex gap-3 from__group form__group-last'>
            <span><i class="ri-group-line"></i></span>
            <div>
                <h6>Ajouter une autre classe</h6>
                <div>
                <button type='submit'>Ajouter</button>

            </div>
            </div>
          </FormGroup>
      
    </form>
  </Col>
};

export default SearchBar;
