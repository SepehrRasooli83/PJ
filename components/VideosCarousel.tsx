"use client";
import React, { useState } from "react";

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
};

type VideoGridProps = {
  videos: Video[];
};

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  const videosPerPage = 9; // Display 3x3 grid (9 videos per page)
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the videos to display on the current page
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Handle Pagination
  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <>
      <div>
        <h1 className="flex justify-center">Videos</h1>
      </div>
      <div className="video-grid-container" style={{ padding: "20px" }}>
        {videos.length > 0 ? (
          <>
            {/* Video Grid */}
            <div
              className="grid-container"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
                gap: "20px",
              }}
            >
              {currentVideos.map((video) => (
                <div
                  key={video.id}
                  className="video-card"
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "10px",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <iframe
                    width="100%"
                    height="180"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: "8px" }}
                  ></iframe>
                  <h3 style={{ marginTop: "10px", fontSize: "16px" }}>
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div
                className="pagination-controls"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  style={{
                    padding: "8px 12px",
                    border: "none",
                    backgroundColor: currentPage === 1 ? "#ddd" : "#007bff",
                    color: "white",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Previous
                </button>
                <span style={{ fontSize: "16px" }}>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  style={{
                    padding: "8px 12px",
                    border: "none",
                    backgroundColor:
                      currentPage === totalPages ? "#ddd" : "#007bff",
                    color: "white",
                    cursor:
                      currentPage === totalPages ? "not-allowed" : "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          // Loader when no videos available
          <div
            role="status"
            className="flex justify-center"
            style={{ textAlign: "center" }}
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoGrid;
