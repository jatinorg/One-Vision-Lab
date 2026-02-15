import React, { useRef, useEffect } from 'react';

const DynamicCore = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const particles = [];
        const particleCount = 150;
        const mouse = { x: -100, y: -100 };

        const createParticle = () => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 1.5,
                speedY: (Math.random() - 0.5) * 1.5,
                color: `hsla(${180 + Math.random() * 60}, 100%, 50%, ${Math.random() * 0.5 + 0.2})`,
                baseX: 0,
                baseY: 0,
                density: (Math.random() * 30) + 1
            };
        };

        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Animate Particles
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = 200;

            particles.forEach(p => {
                // Return to core effect
                const dxCore = centerX - p.x;
                const dyCore = centerY - p.y;
                const distCore = Math.sqrt(dxCore * dxCore + dyCore * dyCore);

                if (distCore > radius + 50) {
                    p.speedX += dxCore * 0.0001;
                    p.speedY += dyCore * 0.0001;
                }

                // Mouse interaction
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 150;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * p.density;
                const directionY = forceDirectionY * force * p.density;

                if (distance < maxDistance) {
                    p.x -= directionX;
                    p.y -= directionY;
                } else {
                    p.x += p.speedX;
                    p.y += p.speedY;
                }

                // Draw Particle
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections
                particles.forEach(p2 => {
                    const dx2 = p.x - p2.x;
                    const dy2 = p.y - p2.y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    if (dist2 < 80) {
                        ctx.strokeStyle = `rgba(0, 242, 255, ${0.1 * (1 - dist2 / 80)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.8 }} />;
};

export default DynamicCore;
