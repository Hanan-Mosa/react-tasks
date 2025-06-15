import { createContext, useState } from "react";

export const VideosContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  
  fetch('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json')
            .then(res=>res.json())
            .then(json=>setVideos(json));
  fetch('https://jsonplaceholder.typicode.com/comments?_limit=20')
  .then(res=>res.json()).then(json=>setComments(json));
  
  return (
    <VideosContext value={{ videos, setVideos ,comments}}>{children}</VideosContext>
  );
};

export default VideoProvider;
