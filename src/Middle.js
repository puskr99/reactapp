import React from 'react'
import {Avatar} from "@mui/material"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import FeedIcon from '@mui/icons-material/Feed';
import "./css/middle.css"
import Post from './Post';

function Middle() {
  return (
    <div className="middle">
    	<div className="middle_input">
    	<div className="middle-form">
    		<Avatar style={{cursor:'pointer'}}/>
    		<form >
    		<input type="text" placeholder="Whats on your mind ?"/>
    		<input type="submit"/>
    		</form>
    	</div>
    	
    	<div className="middle_uploads">
    		<div className="uploads"> 
		     <input type="file" id="contained-button-file" hidden/>
			 <label htmlFor="contained-button-file">
    	     <InsertPhotoIcon  style={{color:'#fc9295'}}/>
			 <span style={{color:'yellow'}}>Photo</span>
			</label>
    		</div>

    		<div className="uploads">
			<input type="file" id="contained-button-file" hidden/>
			 <label htmlFor="contained-button-file">
    		<VideoLibraryIcon style={{color:'#7fc15e'}}/>
    		<span>Video</span>
			</label>
    		</div>

    		<div className="uploads">
			<input type="file" id="contained-button-file" hidden/>
			 <label htmlFor="contained-button-file">
    		<EventIcon style={{color:'#70b5f9'}}/>
    		<span>Event</span>
			</label>
    		</div>

    		<div className="uploads">
			<input type="file" id="contained-button-file" hidden/>
			 <label htmlFor="contained-button-file">
    		<FeedIcon style={{color:'#e7a33e'}}/>
    		<span>Write Article</span>
			</label>
    		</div>

 		</div>

    	</div>

       <Post name="Puskar Adhikari"  text="hello" photoURL="" videoURL="https://www.youtube.com/watch?v=hcMzwMrr1tE"/> 
    </div>
  );
}

export default Middle;