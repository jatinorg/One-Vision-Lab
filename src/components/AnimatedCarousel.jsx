import React from 'react';
import './AnimatedCarousel.css';

const items = [
    { id: 1, src: '/assets/carousel_1.png', alt: 'Neural Network' },
    { id: 2, src: '/assets/carousel_2.png', alt: 'Holographic Brain' },
    { id: 3, src: '/assets/carousel_3.png', alt: 'Computer Vision City' },
    { id: 4, src: '/assets/carousel_1.png', alt: 'AI Visualization' },
    { id: 5, src: '/assets/carousel_2.png', alt: 'ML Operations' },
    { id: 6, src: '/assets/carousel_3.png', alt: 'Vision Analytics' },
    { id: 7, src: '/assets/carousel_1.png', alt: 'System Intelligence' },
    { id: 8, src: '/assets/carousel_2.png', alt: 'Data Synthesis' },
    { id: 9, src: '/assets/carousel_3.png', alt: 'Autonomous Perception' },
    { id: 10, src: '/assets/carousel_1.png', alt: 'Predictive Modeling' },
];

export default function AnimatedCarousel() {
    return (
        <div className="carousel-container">
            <div
                className="carousel-viewport"
                style={{ '--quantity': items.length }}
            >
                <div className="carousel-center">
                    <img src="/assets/centerpiece.png" alt="Centerpiece" />
                </div>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="carousel-item"
                        style={{ '--position': index + 1 }}
                    >
                        <img src={item.src} alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}
