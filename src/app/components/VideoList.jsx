// components/VideoPlayer.js
'use client'
import { useEffect, useRef, useState } from 'react';

const VideoList = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const video = videoRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video.paused || video.ended) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        video.currentTime = e.target.value;
        setCurrentTime(video.currentTime);
    };

    const handleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
    };

    const handleVolumeChange = (e) => {
        const video = videoRef.current;
        video.volume = e.target.value;
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="max-w-screen-md mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-center text-yellow-300">Feedback</h1>
                <div className="relative">
                    <video
                        ref={videoRef}
                        className="w-full"
                        controls
                    >
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg" onClick={handlePlayPause}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        step={1}
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full"
                    />
                </div>
                <div className="flex items-center justify-center mt-2">
                    <button className="text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg mr-2" onClick={handleMute}>
                        Mute
                    </button>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.1}
                        defaultValue={1}
                        onChange={handleVolumeChange}
                        className="w-24"
                    />
                    <span className="ml-2">{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoList;
