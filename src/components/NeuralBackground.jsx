import { useEffect, useRef } from 'react';

export default function NeuralBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];

        // Configuration - Subtler for "Very Dark" feel
        const NODE_COUNT = 90;
        const MAX_DISTANCE = 180;
        const CONNECTION_OPACITY = 0.4; // Dimmer lines for sophisticated look

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            createNodes();
        }

        function createNodes() {
            nodes = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
            }));
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // PITCH BLACK BACKGROUND
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);

            nodes.forEach((a, i) => {
                nodes.slice(i + 1).forEach((b) => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_DISTANCE) {
                        const opacity = (1 - dist / MAX_DISTANCE) * CONNECTION_OPACITY;
                        ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });

                a.x += a.vx;
                a.y += a.vy;

                if (a.x < 0 || a.x > width) a.vx *= -1;
                if (a.y < 0 || a.y > height) a.vy *= -1;

                // Subtle Nodes
                ctx.beginPath();
                ctx.fillStyle = "rgba(56, 189, 248, 0.5)";
                ctx.arc(a.x, a.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        resize();
        animate();

        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, pointerEvents: 'none', background: '#000000' }}>
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%'
                }}
            />
            {/* CINEMATIC VIGNETTE OVERLAY */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
}