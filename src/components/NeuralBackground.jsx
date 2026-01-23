import { useEffect, useRef } from 'react';

export default function NeuralBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];

        // Configuration
        const NODE_COUNT = 60; // Slightly more nodes for full screen
        const MAX_DISTANCE = 140;
        const CONNECTION_Opacity_FACTOR = 0.45;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function createNodes() {
            nodes = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2, // Slower movement for background
                vy: (Math.random() - 0.5) * 0.2,
            }));
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Draw Connections
            nodes.forEach((a, i) => {
                nodes.slice(i + 1).forEach((b) => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_DISTANCE) {
                        ctx.strokeStyle = `rgba(56,189,248,${(1 - dist / MAX_DISTANCE) * CONNECTION_Opacity_FACTOR})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });

                // Update Position
                a.x += a.vx;
                a.y += a.vy;

                // Bounce off walls
                if (a.x < 0 || a.x > width) a.vx *= -1;
                if (a.y < 0 || a.y > height) a.vy *= -1;

                // Draw Nodes
                ctx.beginPath();
                ctx.fillStyle = "rgba(56,189,248,0.8)";
                ctx.arc(a.x, a.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        // Initialize
        resize();
        createNodes();
        animate();

        // Event Listeners
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0, // Behind content (assuming content is z-index 1+)
                pointerEvents: 'none', // Allow clicks to pass through
                opacity: 0.6 // Subtle effect
            }}
        />
    );
}