import {Avatar} from "@mui/material"
import "./css/header.css"
function Headericons({Icon,Title,avatar}) {
  return (
    <div className="headericons">
    {
    	Icon && <Icon></Icon>
    }
	{
		avatar && <Avatar name={avatar}/>
	}
    <span>{Title}</span>
    </div>
  );
}

export default Headericons;
