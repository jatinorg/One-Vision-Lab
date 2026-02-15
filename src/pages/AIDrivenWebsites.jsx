import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./AIDrivenWebsites.css";

const AIDrivenWebsites = () => {
    const [cards, setCards] = useState([
        { id: 'browser', type: 'browser', title: 'CORE_V1.0' },
        { id: 'neural', type: 'neural', title: 'NEURAL_PREDICTOR' },
        { id: 'analytics', type: 'analytics', title: 'ANALYTICS_MATRIX' }
    ]);

    const handleShuffle = () => {
        setCards(prev => {
            const next = [...prev];
            const first = next.shift();
            next.push(first);
            return next;
        });
    };

    // Single persistent card design
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.getElementsByClassName('bento-card');
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const features = [
        {
            title: "Self-Optimizing UI",
            desc: "Websites that curate themselves based on real-time cognitive testing.",
            icon: "🧠",
            size: "small"
        },
        {
            title: "Semantic Discovery",
            desc: "Understand intent and nuance. Transform information retrieval into conversational discovery.",
            icon: "🕸️",
            size: "tall",
            type: "neural"
        },
        {
            title: "Behavioral Prediction",
            desc: "Move beyond reactive design. Our neural engines ingest user telemetry to preemptively reconfigure paths.",
            icon: "📊",
            size: "large",
            type: "dashboard"
        },
        {
            title: "Predictive Prefetching",
            desc: "Loading the next page before the user clicks.",
            icon: "⚡",
            size: "small"
        },
        {
            title: "Cognitive Analytics",
            desc: "Deep-layer attribution models that analyze the 'Why' behind user behavior.",
            icon: "📈",
            size: "large",
            type: "graph"
        },
        {
            title: "Real-time Localization",
            desc: "Linguistic and cultural re-mapping, adjusting more than just text.",
            icon: "🌍",
            size: "small",
            type: "map"
        },
        {
            title: "Asset Pipeline",
            desc: "Auto-creating personalized imagery.",
            icon: "🖼️",
            size: "small"
        },
        {
            title: "Neural Variant Testing",
            desc: "Simultaneously testing thousands of layout variations.",
            icon: "🧪",
            size: "small"
        },
        {
            title: "Biometric Interaction",
            desc: "Analyzing micro-gestures to adjust UI tension.",
            icon: "👁️",
            size: "small"
        }
    ];

    return (
        <div className="ai-websites">
            <Navbar />

            {/* Decorative Background */}
            <div className="glow-spot glow-1" />
            <div className="glow-spot glow-2" />

            {/* Ambient Atmosphere */}
            <div className="ambient-fog" />
            <div className="ambient-fog-2" />

            {/* Background Lines */}
            <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', opacity: 0.05, pointerEvents: 'none' }}>
                {[...Array(30)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        left: `${i * (100 / 30)}%`,
                        width: '1px',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent, #00f2ff, transparent)',
                        animation: `scan ${Math.random() * 8 + 8}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }} />
                ))}
            </div>

            {/* Dynamic Hero Section */}
            <section className="ai-hero">
                <div className="hero-content-left">
                    <motion.p
                        className="ai-vision-subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                    </motion.p>
                    <motion.h1
                        className="ai-vision-title"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ textAlign: 'left', fontWeight: '900' }}
                    >
                        Websites that <br /> Think & Evolve
                    </motion.h1>
                    <p className="ai-hero-description" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 0 30px', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '400' }}>
                        Beyond static code. We deploy self-learning interfaces that analyze behavioral telemetry in real-time, autonomously reconfiguring layouts to maximize conversion and user intent.
                    </p>
                    <div className="ai-hero-btns" style={{ display: 'flex', gap: '20px' }}>
                        <Link to="/contact" className="ai-btn-primary" style={{ padding: '16px 46px', background: 'linear-gradient(135deg, #00f2ff, #bc13fe)', color: '#fff', borderRadius: '50px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', boxShadow: '0 10px 30px rgba(0, 242, 255, 0.3)', border: 'none' }}>Start Building</Link>
                    </div>
                </div>

                <div className="hero-interactive-right">
                    <div className="card-stack-container">
                        <AnimatePresence initial={false} mode="popLayout">
                            {cards.map((card, index) => {
                                const isTop = index === 0;
                                return (
                                    <motion.div
                                        key={card.id}
                                        layout
                                        className={`stacked-card ${card.type}`}
                                        style={{
                                            zIndex: cards.length - index,
                                            cursor: isTop ? 'pointer' : 'default'
                                        }}
                                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                                        animate={{
                                            opacity: isTop ? 1 : 0.7,
                                            x: index * 40,
                                            y: -index * 35,
                                            scale: 1 - (index * 0.08),
                                            filter: isTop ? 'blur(0px)' : 'blur(3px)',
                                            rotateY: isTop ? -10 : -15 - (index * 5),
                                            rotateX: isTop ? 5 : 8 + (index * 2),
                                            boxShadow: isTop ? '0 50px 100px rgba(0,0,0,0.8)' : '0 10px 30px rgba(0,0,0,0.4)'
                                        }}
                                        exit={{ opacity: 0, x: -400, rotateZ: -15, scale: 0.5 }}
                                        onClick={isTop ? handleShuffle : undefined}
                                        whileHover={isTop ? { scale: 1.05, rotateY: 0, rotateX: 0, y: 0, x: 0 } : {}}
                                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                    >
                                        <div className="card-glare" />

                                        {/* Browser Card Content - High Fidelity match to screenshot */}
                                        {card.type === 'browser' && (
                                            <div className="interactive-browser">
                                                <div className="browser-header">
                                                    <div className="window-controls">
                                                        <div className="dot close" />
                                                        <div className="dot minimize" />
                                                        <div className="dot maximize" />
                                                    </div>
                                                </div>
                                                <div className="browser-content">
                                                    <div className="mini-web-header">
                                                        <div className="logo-small">{card.title}</div>
                                                    </div>

                                                    <div className="hero-block">
                                                        <div className="text-1">AI Adaptive UI</div>
                                                        <div className="bar-glow-container">
                                                            <motion.div
                                                                className="bar-fill-glowing"
                                                                animate={{ width: ['0%', '85%'] }}
                                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="stats-grid-v2">
                                                        <div className="s-box-v2">
                                                            <div className="s-label">CONVERSIONS</div>
                                                            <div className="s-value">+42%</div>
                                                        </div>
                                                        <div className="s-box-v2">
                                                            <div className="s-label">ANALYSIS</div>
                                                            <div className="s-value">LIVE</div>
                                                        </div>
                                                        <div className="s-box-v2">
                                                            <div className="s-label">RESPONSE</div>
                                                            <div className="s-value">0.2ms</div>
                                                        </div>
                                                    </div>

                                                    <div className="status-footer">
                                                        <div className="status-left">
                                                            <div className="pulse-indicator" />
                                                            <span>NEURAL_ENGINE_ACTIVE</span>
                                                        </div>
                                                        <div className="corner-glow-dot" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {card.type === 'neural' && (
                                            <div className="neural-dashboard-v2">
                                                <div className="gauge-container">
                                                    <svg viewBox="0 0 100 100">
                                                        <circle cx="50" cy="50" r="45" className="bg" />
                                                        <motion.circle
                                                            cx="50" cy="50" r="45" className="fg"
                                                            strokeDasharray="283"
                                                            animate={{ strokeDashoffset: [283, 110] }}
                                                            transition={{ duration: 2, ease: "easeOut" }}
                                                        />
                                                    </svg>
                                                    <div className="gauge-text">
                                                        <span className="big">82%</span>
                                                        <span className="small">LOAD</span>
                                                    </div>
                                                </div>
                                                <div className="log-stream">
                                                    {[...Array(4)].map((_, i) => (
                                                        <div key={i} className="log-row">
                                                            <span className="tag">SEG_{100 + i}</span>
                                                            <span className="status">OK</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {card.type === 'analytics' && (
                                            <div className="analytics-dashboard-v2">
                                                <div className="viz-header">
                                                    <span>COGNITIVE_MAP</span>
                                                    <span className="active">SCANNING</span>
                                                </div>
                                                <div className="viz-grid">
                                                    {[...Array(12)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="viz-node"
                                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="viz-stripes">
                                                    {[...Array(8)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="stripe"
                                                            animate={{ scaleX: [0.3, 1, 0.3] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Bento Feature Grid */}
            <section className="bento-section">
                <motion.h2
                    className="heading"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '60px', textAlign: 'center' }}
                >
                    Core Capabilities
                </motion.h2>

                <div className="bento-grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className={`bento-card ${f.size}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                rotateX: 5,
                                rotateY: 5,
                                z: 30,
                                transition: { duration: 0.2 }
                            }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                            viewport={{ once: true }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '0.7rem', color: '#00f2ff', opacity: 0.5, fontFamily: 'monospace' }}>
                                ERR_NOMINAL_OP_{i + 1}
                            </div>

                            {/* Premium Bento Icon */}
                            {f.title === "Behavioral Prediction" ? (
                                <div style={{ width: '45px', height: '45px', background: 'linear-gradient(135deg, #ffffff, #a1a1aa)', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'flex-end', gap: '3px', marginBottom: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                                    <div style={{ flex: 1, height: '60%', background: '#10b981', borderRadius: '2px' }} />
                                    <div style={{ flex: 1, height: '100%', background: '#ec4899', borderRadius: '2px' }} />
                                    <div style={{ flex: 1, height: '80%', background: '#3b82f6', borderRadius: '2px' }} />
                                </div>
                            ) : (
                                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '1.5rem' }}>
                                    {f.icon}
                                </div>
                            )}
                            <h3 className="card-title" style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{f.title}</h3>
                            <p className="card-desc" style={{ fontSize: '0.95rem', opacity: 0.7 }}>{f.desc}</p>

                            {f.type === 'dashboard' && (
                                <div className="card-visual advanced-dashboard" style={{ marginTop: '25px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '20px', background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(0,242,255,0.1)' }}>
                                    {/* Left Side: Circular Gauge */}
                                    <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto' }}>
                                        <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                                            <motion.circle
                                                cx="50" cy="50" r="45" fill="none" stroke="#00f2ff" strokeWidth="8"
                                                strokeDasharray="283"
                                                animate={{ strokeDashoffset: [283, 100, 283] }}
                                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                            />
                                        </svg>
                                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                            <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>82%</motion.span>
                                            <span style={{ fontSize: '0.4rem', color: 'rgba(255,255,255,0.4)' }}>NEURAL_LOAD</span>
                                        </div>
                                    </div>

                                    {/* Right Side: Data Feed */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6rem', fontFamily: 'monospace' }}>
                                                <span style={{ color: '#00f2ff' }}>LOG_{i * 1024}</span>
                                                <motion.div
                                                    style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}
                                                >
                                                    <motion.div
                                                        style={{ height: '100%', background: '#bc13fe' }}
                                                        animate={{ x: ['-100%', '100%'] }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                                    />
                                                </motion.div>
                                                <span style={{ color: 'rgba(255,255,255,0.3)' }}>OK</span>
                                            </div>
                                        ))}
                                        <div style={{ marginTop: '5px', padding: '5px', background: 'rgba(0,242,255,0.1)', borderRadius: '4px', textAlign: 'center', fontSize: '0.5rem', color: '#00f2ff', fontWeight: 'bold' }}>
                                            LIVE_TELEMETRY_STREAMING
                                        </div>
                                    </div>

                                    {/* Bottom Grid Monitor */}
                                    <div style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '4px', marginTop: '10px' }}>
                                        {[...Array(24)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                style={{ height: '4px', background: 'rgba(0,242,255,0.2)', borderRadius: '1px' }}
                                                animate={{ opacity: [0.2, 1, 0.2] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: Math.random() * 2 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {f.type === 'graph' && (
                                <div className="card-visual advanced-analytics" style={{ marginTop: '20px', background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(188,19,254,0.1)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                        <div style={{ fontSize: '0.7rem', color: '#bc13fe', fontWeight: 'bold' }}>USER_RETENTION_INDEX</div>
                                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>+14.2%</div>
                                    </div>
                                    <div className="statistics-graph" style={{ height: '100px', display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                                        {[30, 70, 45, 90, 60, 85, 40, 55, 75, 40].map((h, idx) => (
                                            <div key={idx} style={{ flex: 1, position: 'relative', height: '100%' }}>
                                                <motion.div
                                                    style={{ position: 'absolute', bottom: 0, width: '100%', background: 'linear-gradient(to top, rgba(188, 19, 254, 0.1), #bc13fe)', borderRadius: '2px 2px 0 0' }}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: 0.5 + (idx * 0.1), duration: 0.8 }}
                                                />
                                                <motion.div
                                                    style={{ position: 'absolute', bottom: `${h}%`, width: '100%', height: '2px', background: '#fff', opacity: 0.5 }}
                                                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px', fontSize: '0.5rem', color: 'rgba(255,255,255,0.3)' }}>
                                        <span>AVG_ENGAGEMENT: 4.2m</span>
                                        <span>BOUNCE_RATE: 12%</span>
                                    </div>
                                </div>
                            )}

                            {f.type === 'map' && (
                                <div className="card-visual mini-map" style={{ marginTop: '15px', height: '80px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            style={{ position: 'absolute', width: '4px', height: '4px', background: '#00f2ff', borderRadius: '50%', left: `${20 + i * 15}%`, top: `${30 + (i % 2) * 20}%` }}
                                            animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                        />
                                    ))}
                                    <svg width="100%" height="100%" style={{ opacity: 0.1 }}>
                                        <path d="M10,40 Q30,10 50,40 T90,40" stroke="#00f2ff" fill="none" strokeWidth="1" />
                                        <path d="M20,60 Q40,30 60,60 T100,60" stroke="#bc13fe" fill="none" strokeWidth="1" />
                                    </svg>
                                </div>
                            )}

                            {f.type === 'neural' && (
                                <div className="card-visual neural-visual" style={{ marginTop: '40px', height: '200px', position: 'relative', overflow: 'hidden', background: 'rgba(0,0,0,0.3)', borderRadius: '15px' }}>
                                    <div style={{ position: 'absolute', inset: 0, opacity: 0.2, background: 'radial-gradient(circle at 50% 50%, #00f2ff 0%, transparent 70%)' }} />
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', padding: '20px' }}>
                                        {[...Array(15)].map((_, idx) => (
                                            <motion.div
                                                key={idx}
                                                style={{ width: '4px', height: '4px', background: '#00f2ff', borderRadius: '50%' }}
                                                animate={{
                                                    scale: [1, 2, 1],
                                                    opacity: [0.3, 1, 0.3],
                                                    boxShadow: ['0 0 0px #00f2ff', '0 0 10px #00f2ff', '0 0 0px #00f2ff']
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 2
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <motion.div
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, #00f2ff, transparent)' }}
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Impact Section */}
            <section className="ai-section ai-impact">
                <div className="container">
                    <h2 className="center-text gradient-text">Dynamic Business Impact</h2>
                    <div className="ai-impact-grid">
                        {[
                            { val: "↑ Engagement", desc: "Higher retention rates" },
                            { val: "↑ Conversion", desc: "Optimized user journeys" },
                            { val: "↓ Ops", desc: "Reduced manual operations" },
                            { val: "↑ Velocity", desc: "Faster decision making" },
                            { val: "↑ Revenue", desc: "Data-backed growth" },
                            { val: "↓ Friction", desc: "Seamless accessibility" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="ai-impact-card glass"
                                whileHover={{
                                    rotateX: -10,
                                    rotateY: 10,
                                    z: 30,
                                    boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <h4>{item.val}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="ai-final-cta">
                <motion.div
                    className="container center-text"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <div style={{ marginBottom: '20px', color: '#00f2ff', fontFamily: 'monospace', fontSize: '0.8rem', opacity: 0.6 }}>SYSTEM_READY // INITIALIZING_SHIFT</div>
                    <h2 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-2px' }}>INITIALIZE <br /> YOUR EVOLUTION</h2>
                    <p style={{ fontSize: '1.4rem', color: '#94a3b8', marginBottom: '3rem' }}>The era of static digital presence is over. Deploy a system that thinks.</p>
                    <Link to="/contact" className="ai-btn-outline" style={{ display: 'inline-block', padding: '18px 50px', border: '1px solid #bc13fe', color: '#bc13fe', borderRadius: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', background: 'rgba(188, 19, 254, 0.05)', boxShadow: '0 0 20px rgba(188, 19, 254, 0.2)' }}>Request Protocol Access</Link>
                </motion.div>
            </section>

            {/* Simulated Technical Overlay */}
            <div style={{ position: 'fixed', bottom: '40px', left: '40px', zIndex: 100, pointerEvents: 'none', opacity: 0.8 }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#00f2ff', letterSpacing: '1px', lineHeight: '1.8' }}>
                    <div style={{ opacity: 0.5 }}>- LOCAL_HOST: ACTIVE</div>
                    <div style={{ opacity: 0.7 }}>- DATA_STREAM: NOMINAL</div>
                    <div style={{ opacity: 1 }}>- NEURAL_LINK: ESTABLISHED</div>
                </div>
            </div>

            <footer className="footer" style={{ background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                <p>© {new Date().getFullYear()} One Vision Lab • Intelligence by Design</p>
            </footer>
        </div>
    );
};

export default AIDrivenWebsites;
