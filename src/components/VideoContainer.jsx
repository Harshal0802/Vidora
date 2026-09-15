import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await fetch(YOUTUBE_VIDEOS_API);
      const data = await res.json();
      setVideos(data?.items);
    };

    getVideos();
  }, []);

  return <div>{videos[0] && <VideoCard info={videos[0]} />}</div>;
};

export default VideoContainer;
