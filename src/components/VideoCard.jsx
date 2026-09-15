import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div>
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <h1>{title}</h1>
      <h2>{channelTitle}</h2>
    </div>
  );
};

export default VideoCard;
