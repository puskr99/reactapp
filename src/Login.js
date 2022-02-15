import React from 'react'
import './css/login.css'
import Signup from './Signup'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Header from './Header';

function Login() {
  return (
    <div className="loginScreen">
    <form>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="submit" value="Login"/>
    <h4> Not on Vibebees?<Link to="/signup" style={{ textDecoration: 'none' }}><span>Sign Up Here</span></Link></h4>
            </form>
    </div>
    
  );
}

export default Login;
