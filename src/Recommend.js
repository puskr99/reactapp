import React from 'react'
import "./css/recommend.css"
import {Avatar} from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';

function Recommend() {
  return (
    <div className="recommend">
    <div className="recommend_top">
    <div className="recommend_header">
    	<h4>Latest Updates For You</h4>
    	<InfoIcon/>
    </div>

    	 <div className="recommend_body">
    	 <ul className="recommend_options">
    	 <li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p>  6d ago * 200 viewers</p>
    	 </li><li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p> 6d ago * 200 viewers</p>
    	 </li>

    	 <li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p> 6d ago * 200 viewers</p>
    	 </li>

    	 <li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p> 6d ago * 200 viewers</p>
    	 </li>

    	 <li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p>  6d ago * 200 viewers</p>
    	 </li>
    	 </ul>
    	 </div>
	</div>

	<div className="recommend_bottom">
    <div className="recommend_header">
    	<h4>Latest Updates For You</h4>
    	<InfoIcon/>
    </div>

    	 <div className="recommend_body">
    	 <ul className="recommend_options">
    	 <li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p>  6d ago * 200 viewers</p>
    	 </li><li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p> 6d ago * 200 viewers</p>
    	 </li>

    	 <li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p> 6d ago * 200 viewers</p>
    	 </li>

    	 <li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p> 6d ago * 200 viewers</p>
    	 </li>

    	 <li>
    	 <h4>Recently Listed Job vacancies</h4>
    	 <p>  6d ago * 200 viewers</p>
    	 </li>
    	 </ul>
    	 </div>


    </div>



    </div>
  );

}


export default Recommend;