import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import "./ComputerVision.css";

// --- CINEMATIC REAL ASSET COMPONENTS ---

const CinematicBackground = ({ src, opacity, scale, blur, x, y, transformOrigin, children }) => (
  <div className="phase-layer-container" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <motion.div
      className="phase-real-bg-cinematic"
      style={{
        backgroundImage: `url(${src})`,
        opacity,
        scale,
        x,
        y,
        transformOrigin: transformOrigin || 'center',
        filter: blur ? useTransform(blur, v => `blur(${v})`) : 'none',
        position: 'absolute',
        inset: '-20%'
      }}
    />
    <motion.div style={{ opacity, position: 'relative', zIndex: 10 }}>
      {children}
    </motion.div>
  </div>
);

const RevolvingRealEarth = ({ mouseX, mouseY, scrollSmooth }) => {
  // Sync rotation to scroll so we land on India (approx 72% position on most mercator textures)
  // We want it to spin a bit during the journey and land precisely.
  const rotationOffset = useTransform(scrollSmooth, [0.4, 1], ["0%", "72%"]);

  return (
    <motion.div
      className="revolving-earth-container"
      style={{
        rotateX: useTransform(mouseY, [-500, 500], [15, -15]),
        rotateY: useTransform(mouseX, [-500, 500], [-15, 15])
      }}
    >
      <div className="earth-real-sphere" />
      <motion.div
        className="earth-real-texture-wrap"
        style={{ backgroundPositionX: rotationOffset }}
      />
      <div className="earth-atmosphere-glow" />

      {/* Procedural Satellites on Real Earth */}
      {[0, 120, 240].map((delay, i) => (
        <motion.div
          key={i}
          className="procedural-satellite"
          animate={{
            rotate: 360,
            translateX: [180, 240, 180]
          }}
          transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear", delay: i }}
        >
          <div className="sat-body" />
          <div className="sat-beam" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const OrbitalOverlay = ({ mouseX, mouseY }) => (
  <motion.div
    className="orbital-ar-overlay"
    style={{
      x: useTransform(mouseX, [-500, 500], [-30, 30]),
      y: useTransform(mouseY, [-500, 500], [-30, 30])
    }}
  >
    <svg viewBox="0 0 800 800" className="orbital-svg">
      {[150, 250, 350].map((r, i) => (
        <circle key={i} cx="400" cy="400" r={r} className="orbit-line-dashed" />
      ))}
    </svg>
  </motion.div>
);

const RadarLock = ({ mouseX, mouseY }) => (
  <motion.div
    className="urban-radar-container cine-radar"
    style={{
      x: useTransform(mouseX, [-500, 500], [-50, 50]),
      y: useTransform(mouseY, [-500, 500], [-50, 50])
    }}
  >
    <div className="radar-grid" />
    <motion.div
      className="radar-beam"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    <div className="radar-crosshair" />
  </motion.div>
);

// --- MAIN COMPONENT ---

export default function ComputerVision() {
  const containerRef = useRef(null);
  const [isTraveling, setIsTraveling] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollSmooth = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  const handleWarpTravel = () => {
    if (isTraveling) return;
    setIsTraveling(true);

    const currentPos = scrollYProgress.get();
    let nextPos = 0;
    if (currentPos < 0.2) nextPos = 0.25;
    else if (currentPos < 0.45) nextPos = 0.5;
    else if (currentPos < 0.7) nextPos = 0.75;
    else nextPos = 0;

    window.scrollTo({
      top: nextPos * (containerRef.current.scrollHeight - window.innerHeight),
      behavior: 'smooth'
    });

    setTimeout(() => setIsTraveling(false), 1500);
  };

  // --- DEEP ZOOM TRANSFORMS ---

  // Phase 1: Galaxy (Deep Space)
  const galaxyOpacity = useTransform(scrollSmooth, [0, 0.15, 0.55], [1, 0.8, 0]);
  const galaxyScale = useTransform(scrollSmooth, [0, 0.55], [1.1, 10]);
  const galaxyBlur = useTransform(scrollSmooth, [0, 0.3], ["0px", "10px"]);

  // Phase 2: Solar System (The Final Earth Asset)
  // We zoom directly into the background Earth until it fills the screen
  const solarOpacity = useTransform(scrollSmooth, [0.1, 0.25, 0.9, 1], [0, 1, 1, 1]);
  const solarScale = useTransform(scrollSmooth, [0.1, 0.3, 1], [1, 1, 30]); // Massive deep zoom
  const solarBlur = useTransform(scrollSmooth, [0.95, 1], ["0px", "5px"]);

  // UI elements appear at the very end "on earth"
  const uiOpacity = useTransform(scrollSmooth, [0.8, 0.95], [0, 1]);

  return (
    <div
      className={`cv-page-deep-journey cinematic-mode ${isTraveling ? 'is-warping' : ''}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleWarpTravel}
    >
      <Navbar />

      {/* FIXED HUD OVERLAY */}
      <div className="cosmic-hud-fixed">
        <div className="hud-corner top-left">
          <div className="hud-line" />
          <div className="hud-text">DEEP_PENETRATION // CINEMATIC_ACTIVE</div>
          <div className="hud-text" style={{ fontSize: '0.6rem', opacity: 0.6 }}>REAL_STREAM_V4.0</div>
        </div>
        <div className="hud-corner bottom-right">
          <div className="hud-text">DEPTH: {Math.round(scrollSmooth.get() * 12800)}km</div>
          <motion.div
            className="hud-telemetry"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >SYNC_LOCK: ATTAINED</motion.div>
          <div className="hud-line" />
        </div>
      </div>

      <div className="deep-journey-viewport">

        {/* PHASE 1: GALAXY */}
        <CinematicBackground
          src="/assets/galaxy_cinematic.png"
          opacity={galaxyOpacity}
          scale={galaxyScale}
          blur={galaxyBlur}
        >
          <div className="phase-content">
            <div className="tech-scan-code">SECTOR 01 // DEEP_FIELD</div>
          </div>
        </CinematicBackground>

        {/* PHASE 2: SOLAR (Zooms to background Earth) */}
        <CinematicBackground
          src="/assets/solar_cinematic.png"
          opacity={solarOpacity}
          scale={solarScale}
          transformOrigin="72% 60%"
          blur={solarBlur}
        >
          <OrbitalOverlay mouseX={mouseX} mouseY={mouseY} />

          {/* Final HUD & Interaction Layer appearing at end of zoom */}
          <motion.div style={{ opacity: uiOpacity, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <div className="phase-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginTop: '-15%' }}>
              <div className="tech-scan-code">SECTOR 03 // TERRA_BEYOND</div>

              <div className="local-metrics-grid" style={{ opacity: 0.8 }}>
                <div className="metric-box glass cine-glass">
                  <div className="m-tag">NODES</div>
                  <div className="m-num">8.4k</div>
                </div>
                <div className="metric-box glass cine-glass">
                  <div className="m-tag">SIGNAL</div>
                  <div className="m-num">OPT</div>
                </div>
              </div>

              <Link to="/contact" className="cv-penetrate-btn cine">Initialize Protocol</Link>
            </div>
          </motion.div>

          <div className="phase-content">
            <div className="tech-scan-code">SECTOR 02 // HELIOS_DOMAIN</div>
          </div>
        </CinematicBackground>

      </div>

      <section className="cv-matrix-static">
        <motion.div
          className="global-cv-scanline"
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Section Technical Crosshair */}
        <motion.div
          className="cv-section-crosshair"
          style={{
            x: mouseX,
            y: useTransform(mouseY, v => v + 4000)
          }}
        >
          <div className="ch-h" />
          <div className="ch-v" />
          <div className="ch-tag">PTR_LOCK</div>
        </motion.div>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="matrix-heading cine"
          >
            Detection Matrix
          </motion.h2>

          <div className="matrix-bento">
            {[
              {
                title: "Neural Segmentation",
                val: "99.98%",
                label: "OBJECT_DETECTION_V4",
                fill: "99%",
                sub: "mAP: 0.942 | IoU: 0.89"
              },
              {
                title: "Inference Engine",
                val: "0.4ms",
                label: "LATENCY_PROFILE",
                fill: "85%",
                sub: "FP16 QUANTIZED"
              },
              {
                title: "Real-time Processing",
                val: "120 FPS",
                label: "STREAM_STABILITY",
                fill: "70%",
                sub: "4K MULTI-STREAM"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bento-item glass cine-glass"
              >
                {/* Visual CV Corners (Bounding Box Style) */}
                <div className="cv-corner tl" />
                <div className="cv-corner tr" />
                <div className="cv-corner bl" />
                <div className="cv-corner br" />

                {/* Simulated Neural Detections */}
                <div className="cv-active-detections">
                  <motion.div
                    className="cv-box"
                    animate={{
                      opacity: [0, 0.6, 0.4, 0.8, 0],
                      x: [20, 40, 30],
                      y: [10, 50, 20]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="cv-box-label">[ {item.title.split(' ')[0].toUpperCase()} ]</span>
                  </motion.div>
                </div>

                {/* Interactive Scanning HUD */}
                <div className="card-telemetry-tag">SCANNING...</div>

                <div className="b-label">{item.label}</div>
                <div className="b-val">{item.val}</div>
                <div className="b-title">{item.title}</div>

                <div className="b-status-bar">
                  <motion.div
                    className="b-status-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: item.fill }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>

                <div className="b-sub-metrics">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div >
  );
}
