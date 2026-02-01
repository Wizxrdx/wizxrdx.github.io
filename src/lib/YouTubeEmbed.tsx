"use client";

import { useState } from "react";
import styles from "../../app/projects/page.module.css";
// We might need to adjust styles or pass className as prop
// simpler to just accept className

interface YouTubeEmbedProps {
    videoId: string;
    title: string;
    className?: string;
}

export default function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    if (isLoaded) {
        return (
            <iframe
                loading="lazy"
                className={className}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }

    return (
        <div
            className={className}
            onClick={() => setIsLoaded(true)}
            style={{
                position: 'relative',
                cursor: 'pointer',
                backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            role="button"
            aria-label={`Play video: ${title}`}
        >
            <div style={{
                width: '68px',
                height: '48px',
                backgroundColor: 'rgba(33, 33, 33, 0.8)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease'
            }}>
                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                    <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
            </div>
        </div>
    );
}
