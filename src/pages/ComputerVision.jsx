import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./ComputerVision.css";

export default function ComputerVision() {
  return (
    <div className="cv-page">
      <Navbar />

      {/* Hero Section */}
      <section className="cv-hero">
        <video autoPlay muted loop className="cv-video">
          <source src="/assets/vision.mp4" type="video/mp4" />
        </video>
        <div className="cv-hero-overlay" />
        <motion.div
          className="cv-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="cv-glitch-text">Computer Vision</h1>
          <p className="cv-hero-subtitle">From Pixels to Decisions</p>
          <p className="cv-hero-description">
            Intelligence that sees, understands & acts. We build vision systems that
            translate visual data into actionable business intelligence.
          </p>
          <div className="cv-hero-btns">
            <Link to="/contact" className="cv-btn-primary">Get Started</Link>
          </div>
        </motion.div>
      </section>

      {/* Intro/Core Characteristics */}
      <section className="cv-section cv-core">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="cv-info-card glass"
          >
            <h2>Visual Intelligence</h2>
            <p>
              Our Computer Vision solutions leverage state-of-the-art neural networks to
              automate visual inspection, analyze document structures, and prioritize
              medical diagnosis.
            </p>
          </motion.div>

          <div className="cv-characteristics-grid">
            {[
              "Image Annotation",
              "Object Classification",
              "Optical Character Recognition",
              "Image Segmentation",
              "Real-time Tracking"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="cv-char-card glass-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  rotateX: 10,
                  rotateY: 10,
                  z: 30,
                  boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)"
                }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="cv-char-icon">⚡</div>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="cv-section">
        <div className="container">

          {/* Quality Inspection */}
          <div className="cv-feature-row">
            <motion.div
              className="cv-feature-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="gradient-text">Automated Visual Quality Inspection</h2>
              <p>Our real-time systems identify defective and non-defective parts directly from live camera feeds.</p>
              <ul className="cv-list">
                <li>Detect defective vs non-defective parts</li>
                <li>Accurate bounding box tracking</li>
                <li>Factory automation ready</li>
                <li>Scalable across production lines</li>
              </ul>
            </motion.div>
            <motion.div
              className="cv-feature-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/assets/object-detection.jpg" alt="Quality Inspection" className="glass-img" />
            </motion.div>
          </div>

          {/* Medical */}
          <div className="cv-feature-row reverse">
            <motion.div
              className="cv-feature-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="gradient-text">Medical Image Triage</h2>
              <p>AI-assisted medical image triage prioritizes critical X-rays, CT scans, and MRIs for faster diagnosis.</p>
              <ul className="cv-list">
                <li>Automatic critical-case prioritization</li>
                <li>Supports radiologists with AI insights</li>
                <li>Improves clinical workflows</li>
                <li>Seamless hospital integration</li>
              </ul>
            </motion.div>
            <motion.div
              className="cv-feature-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/assets/medical-image-triage.jpg" alt="Medical Triage" className="glass-img" />
            </motion.div>
          </div>

          {/* Moderation */}
          <div className="cv-feature-row">
            <motion.div
              className="cv-feature-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="gradient-text">AI Content Moderation</h2>
              <p>AI systems analyze images and videos to detect harmful or policy-violating content at scale.</p>
              <ul className="cv-list">
                <li>Detects violence, nudity, and unsafe visuals</li>
                <li>Real-time automated moderation</li>
                <li>Reduced manual review costs</li>
                <li>Enhanced platform safety</li>
              </ul>
            </motion.div>
            <motion.div
              className="cv-feature-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/assets/content-moderation.jpg" alt="Content Moderation" className="glass-img" />
            </motion.div>
          </div>

          {/* PPE */}
          <div className="cv-feature-row reverse">
            <motion.div
              className="cv-feature-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="gradient-text">PPE Detection & Worker Safety</h2>
              <p>AI-powered PPE detection ensures worker compliance with helmets, vests, masks, and safety gear.</p>
              <ul className="cv-list">
                <li>Helmet & vest detection</li>
                <li>Real-time safety alerts</li>
                <li>Ideal for factories & construction sites</li>
                <li>Enhanced workplace compliance</li>
              </ul>
            </motion.div>
            <motion.div
              className="cv-feature-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/assets/ppe-detection.jpg" alt="PPE Detection" className="glass-img" />
            </motion.div>
          </div>

          {/* OCR */}
          <div className="cv-feature-row">
            <motion.div
              className="cv-feature-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="gradient-text">OCR & Document Intelligence</h2>
              <p>Extract structured data from documents using AI-powered OCR for automated processing.</p>
              <ul className="cv-list">
                <li>Structured data extraction</li>
                <li>Multi-language support</li>
                <li>Handwritten text recognition</li>
                <li>Automated form processing</li>
              </ul>
            </motion.div>
            <motion.div
              className="cv-feature-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/assets/ocr-document.jpg" alt="OCR" className="glass-img" />
            </motion.div>
          </div>

          {/* Segmentation */}
          <div className="cv-feature-row reverse">
            <motion.div
              className="cv-feature-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="gradient-text">Image & Video Segmentation</h2>
              <p>Pixel-level understanding for advanced analytics and automation in complex environments.</p>
              <ul className="cv-list">
                <li>Instance and semantic segmentation</li>
                <li>Boundary-perfect object isolation</li>
                <li>Video background removal</li>
                <li>Advanced medical imaging masks</li>
              </ul>
            </motion.div>
            <motion.div
              className="cv-feature-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/assets/segmentation.jpg" alt="Segmentation" className="glass-img" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Business Impact */}
      <section className="cv-section cv-impact">
        <div className="container">
          <h2 className="center-text gradient-text">Business Impact of CV</h2>
          <div className="cv-impact-grid">
            {[
              { val: "99%+ Accuracy", desc: "In quality inspection" },
              { val: "80% Faster", desc: "Document processing" },
              { val: "24/7 Safety", desc: "Automated site monitoring" },
              { val: "30%+ Gain", desc: "In radiologist efficiency" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="cv-impact-card glass"
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
      <section className="cv-final-cta">
        <motion.div
          className="container center-text"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2>Build Vision-Powered Products</h2>
          <p>Transform pixels into actionable insights with our custom Computer Vision solutions.</p>
          <Link to="/contact" className="cv-btn-outline">Start Your Project</Link>
        </motion.div>
      </section>

    </div>
  );
}
