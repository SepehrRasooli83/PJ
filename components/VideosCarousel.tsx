"use client";
import React from "react";

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
};

type VideoCarouselProps = {
  videos: Video[];
};

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  console.log(`VIDEOS::: ${videos.length}`);
  return (
    <div className="video-carousel-container" style={{ padding: "20px" }}>
      {videos.length > 0 ? (
        <div
          className="carousel"
          style={{ display: "flex", overflowX: "auto" }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="carousel-item"
              style={{ margin: "10px" }}
            >
              <div className="video-card">
                <iframe
                  width="300"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "8px" }}
                ></iframe>
                <h3 style={{ textAlign: "center" }}>{video.title}</h3>
                <p>{video.description.substring(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No videos found.</p>
      )}
    </div>
  );
};

export default VideoCarousel;
