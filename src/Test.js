import './css/test.css';
import React from 'react';
import {Avatar} from "@mui/material"
import Header from './Header'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Login from './Login'
import Sidebar from './Sidebar';
import Middle from './Middle';
import Recommend from './Recommend';

function Test() {
  return (
    <>
   <div className='test1'>
     <span>Hello guys</span>
   </div>
   <div className='test2'>
     <span>Hello guys</span>
     <span>ok</span>
   </div>
   <div className='test3'>
     <span>Hello guys</span>
   </div>

  
   </>
    
  );
}
export default Test;
