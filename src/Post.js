import React from 'react'
import {Avatar} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import ReactPlayer from 'react-player';

function Post({name,text,photoURL,videoURL}) {
  return (
    <div className="posts">
    	<div className="post_header">
    	<div className="post_headerLeft">
    	<Avatar  src="" style={{cursor:'pointer'}}/>
    	<div className="post_profile_details">
    		<h3>{name}</h3>
    		<p></p>
    	</div>

    	</div>
    		<MoreVertIcon style={{cursor:'pointer'}}/>
    	</div>

    	<div className="post_body">
			<p>{text}</p>
			<ReactPlayer 
				className='videoLayout'
      			url={videoURL}
      			controls="true"
     		 />	
			
    	</div>

    	<div className="post_footer">
    	
    		<div className="post_footer_options">
    		<ThumbUpIcon/>
    		<span>Like</span>
    		</div>
    		<div className="post_footer_options">
    		<CommentIcon/>
    		<span>Comment</span>
    		</div>
    		<div className="post_footer_options">
    		<ShareIcon/>
    		<span>Share</span>
    		</div>
    		<div className="post_footer_options">
    		<SendIcon/>
    		<span>Send</span>
    		</div>
    		
    	</div>

    </div>
  );
}

export default Post;
