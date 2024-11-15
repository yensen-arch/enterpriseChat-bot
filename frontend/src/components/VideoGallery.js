"use client";
import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

const videos = [
  {
    id: 1,
    title: "Nature Docum",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Tech Innovation",

    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Art History",
    videoId: "dQw4w9WgXcQ",
  },
];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const onStateChange = (event) => {
    setIsPlaying(event.data === YouTube.PlayerState.PLAYING);
  };

  return (
    <div className="relative w-full h-[250px] overflow-hidden ">
      <div className="absolute inset-0 flex items-center justify-center">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute w-[80%] h-[230px] bg-white rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "z-20 scale-100 opacity-100"
                : index === (currentIndex + 1) % videos.length
                ? "z-10 scale-95 opacity-70 translate-x-[60%]"
                : index === (currentIndex - 1 + videos.length) % videos.length
                ? "z-10 scale-95 opacity-70 -translate-x-[60%]"
                : "z-0 scale-90 opacity-0"
            }`}
          >
            <div className="flex h-full ">
              <div className="w-1/2 p-8 bg-slate-100 rounded-lg">
                <div className="flex items-center h-full ">
                  <h2 className="text-2xl font-bold ">{video.title}</h2>
                </div>
              </div>
              <div className="w-1/2 relative shadow-xl overflow-hidden rounded-lg">
                <YouTube
                  videoId={video.videoId}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: index === currentIndex ? 1 : 0,
                      controls: 1,
                      rel: 0,
                    },
                  }}
                  onStateChange={onStateChange}
                  className="absolute inset-0"
                  ref={index === currentIndex ? playerRef : null}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
