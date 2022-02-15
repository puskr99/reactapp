import React from 'react';
import "./css/messages.css";
import { Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import RateReviewIcon from '@mui/icons-material/RateReview';

function Message() {
    return (
        <div className="fullmessagelayout">
            <div className="Messages">
                          <div className="messageheader">
                              <h3>Messaging <span> < LinearScaleIcon /> < RateReviewIcon /></span></h3>
                          </div>
                          <div className="search">
                              <SearchIcon /> <input type="text" placeholder="Search messages" /> <MenuOpenIcon />
                          </div>
                          <div className="ramekomsg">
                          <div className="ram">
                        <Avatar src="https://thumbs.dreamstime.com/b/texasheeler-luna-tired-hike-up-mountain-glacier-background-photo-taken-black-white-tired-dog-close-up-195187273.jpg" style={{ margin: '' }} />
                        <p>How are you ??? </p>
                          </div>
                        <div className="ram">
                            <Avatar src="https://thumbs.dreamstime.com/b/texasheeler-luna-tired-hike-up-mountain-glacier-background-photo-taken-black-white-tired-dog-close-up-195187273.jpg" style={{ margin: '' }} />
                            <p>How sexy are you ??? </p>
                        </div>
                        <div className="ram">
                            <Avatar src="https://thumbs.dreamstime.com/b/texasheeler-luna-tired-hike-up-mountain-glacier-background-photo-taken-black-white-tired-dog-close-up-195187273.jpg" style={{ margin: '' }} />
                            <p>How horney are you ??? </p>
                        </div>
                        <div className="ram">
                            <Avatar src="https://thumbs.dreamstime.com/b/texasheeler-luna-tired-hike-up-mountain-glacier-background-photo-taken-black-white-tired-dog-close-up-195187273.jpg" style={{ margin: '' }} />
                            <p>How horney are you ??? </p>
                        </div>
                        <div className="ram">
                            <Avatar src="https://thumbs.dreamstime.com/b/texasheeler-luna-tired-hike-up-mountain-glacier-background-photo-taken-black-white-tired-dog-close-up-195187273.jpg" style={{ margin: '' }} />
                            <p>How horney are you ??? </p>
                        </div>
                        <div className="ram">
                            <Avatar src="https://thumbs.dreamstime.com/b/texasheeler-luna-tired-hike-up-mountain-glacier-background-photo-taken-black-white-tired-dog-close-up-195187273.jpg" style={{ margin: '' }} />
                            <p>How horney are you ??? </p>
                        </div>
                        <div className="ram">
                            <Avatar src="https://thumbs.dreamstime.com/b/texasheeler-luna-tired-hike-up-mountain-glacier-background-photo-taken-black-white-tired-dog-close-up-195187273.jpg" style={{ margin: '' }} />
                            <p>How horney are you ??? </p>
                        </div>
                        <div className="ram">
                            <Avatar src="https://thumbs.dreamstime.com/b/texasheeler-luna-tired-hike-up-mountain-glacier-background-photo-taken-black-white-tired-dog-close-up-195187273.jpg" style={{ margin: '' }} />
                            <p>How horney are you ??? </p>
                        </div>
                    </div>
                </div>
          <div className="middlepart">
                  <div className="middle1">
                              <h3>New Messages</h3>
                          </div>
                          <div className="middle2">
                            <input type="text" placeholder="Type a name or multiple names" />
                          </div>
          </div>
              
        </div>

    );
}
export default Message;