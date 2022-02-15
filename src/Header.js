import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headericons from './Headericons';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from "@mui/material";
import Login from './Login';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Middle from './Middle';
import Recommend from './Recommend'; 
import Message from './Messages';
import Signup from './Signup'
import Sidebar from './Sidebar';
import Test from './Test'
import Default from './Default'

function Header() {
  
  return (
    <div className="header">
      <div className="header_left">
          <div className="header_logo">
           <Link to ="/" style={{ textDecoration: 'none' }}><img src="https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png"/></Link>
                    </div>
           <div className="header_search">
            <SearchIcon />
            <input type="text" placeholder="Search"/>
        </div>
    </div>
    
    <div className="header_right">
    <Link to ="/"   style={{ textDecoration: 'none' }}><Headericons Icon={HomeIcon} Title="Home"/></Link>
    <Headericons Icon={PeopleIcon} Title="My Network"/>
    <Headericons Icon={BusinessCenterIcon} Title="Jobs" />
    <Link to ="/messages" style={{ textDecoration: 'none' }}><Headericons Icon={MessageIcon} Title="Mesaaging" /></Link>
    <Headericons Icon={NotificationsIcon} Title="Notifications" />
    <Link to="/login" style={{ textDecoration: 'none' }}><Headericons avatar={Avatar} Title="My Profile" /></Link>
    </div>
    </div>
    
  );
}

export default Header;