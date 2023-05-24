import React from 'react'

import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Tours from '../pages/Tours';
import Register from '../pages/Register';


const Routers = () => {
  return (
    <Routes>
<Route path='/' element={<Navigate to ='/login'/>}/>
<Route path='/home' element={<Home/>}  />
<Route path='/Tours' element={<Tours/>} />
<Route path='/login' element={<Login/>}  />
<Route path='/register' element={<Register/>}  />

    </Routes>
  );

};

export default Routers;
