
import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Middle from './Middle';
import Recommend from './Recommend'; 
import Message from './Messages'; 
import Test from './Test';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup'
import './css/default.css'

function Default() {
  return (
  	<div className="mainpage">
    <Sidebar/>
    <Middle/>
    <Recommend/>
    </div>
      );
}
export default Default;
