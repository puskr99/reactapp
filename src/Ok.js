import React from 'react';
import ReactPlayer from 'react-player/lazy';

function Ok() {
  return <div className="ok">
      <ReactPlayer
      url="https://www.youtube.com/watch?v=vdY5SFZBgnk&list=RDhcMzwMrr1tE&index=5"
      controls="true"
      />
  </div>;
}

export default Ok;