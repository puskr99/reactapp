import React from 'react'
import "./css/sidebar.css"
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import {Avatar} from "@mui/material"

function Sidebar() {
  return (
    <div className="sidebar">
     	<div className="sidebar_profile">
     	<img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
     		<div className="profile_details">
            <Avatar/>
     		<h4>Puskar Adhikari</h4>
     		<p>Welcome to my profile</p>
     		</div>

        <div className="profile_views">
        <Link to="/test" style={{ textDecoration: 'none',color:'#333' }}><span>Who viewed your profile</span></Link>
        <span className="views_count">100</span>
        </div>

         <div className="profile_views">
        <span>Connections<br/><b>Grow Your Netwrok</b></span>
        <span className="views_count">150</span>
        </div>

        </div>  

        <div className="sidebar_recent">
        <p>Recent</p>
        <p className="more"><span>#</span>Crypto </p>
        <p className="more"><span>#</span>Bitcoin</p>
        <p className="more"><span>#</span>Nepse</p>
        <p className="more"><span>#</span>ElonMusk</p>
        </div>
        
    </div>
  );
}

export default Sidebar;
