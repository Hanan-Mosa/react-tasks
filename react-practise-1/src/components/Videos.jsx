import React, { useContext } from "react";
import Video from "./Video";
import { VideosContext } from "../context/videos";

const Videos = () => {
  const { videos, setVideos } = useContext(VideosContext);

  return (
    <div className="d-flex flex-wrap">
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Videos;
