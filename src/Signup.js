import React from 'react'
import './css/login.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Login from './Login'
import Sidebar from './Sidebar';
import Header from './Header';

function Signup() {
  return (
    <div className="loginScreen">
    <form>
    <input type="text" placeholder="Full Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="submit" value="Sign up"/>
    <h4> Already a member?<Link to ="/login" style={{ textDecoration: 'none' }}><span>Login</span></Link></h4>
    </form>

    </div>

    
  );
}

export default Signup;
