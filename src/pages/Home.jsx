import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AnimatedCarousel from "../components/AnimatedCarousel";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Intelligent Solutions with One Vision
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          One Vision Lab delivers AI-powered websites, advanced computer vision
          services, Intelligent Solutions
          driven by clarity, data, and innovation.
        </motion.p>

        <motion.div
          className="cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="primary-btn">Explore Services</button>
        </motion.div>
      </section>

      {/* 3D SHOWCASE */}
      <section className="showcase-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <AnimatedCarousel />
        </motion.div>
      </section>

      {/* TRUST STRIP */}
      {/* <section className="trust-strip">
        <div>AI-Driven Websites</div>
        <div>Computer Vision</div>
        <div>Intelligent Solutions</div>
      </section> */}

      {/* SERVICES */}
      <section className="section">
        <h2 className="heading">Our Core Services</h2>

        <div className="grid">
          <motion.div
            className="card"
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              z: 50,
              boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3>Website Development</h3>
            <p>
              Custom, scalable, and performance-focused websites designed to
              meet modern business needs.
            </p>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{
              rotateX: 10,
              rotateY: -10,
              z: 50,
              boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3>Computer Vision</h3>
            <p>
              High-quality, precision-focused image and video annotations for
              advanced computer vision models.
            </p>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{
              rotateX: -10,
              rotateY: 10,
              z: 50,
              boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3>Intelligent Solutions</h3>
            <p>
              Operational intelligence driven by AI-Ops, ML-Ops, and statistical strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="why-section">
        <h2 className="heading">Technology & Market Insights</h2>
        <p className="why-text">
          We provide up-to-date technology insights and weekly stock market
          analysis backed by statistics.
          {/* <br /><br />
          Our goal is to help learners and professionals stay informed,
          analytical, and ahead of trends. */}
        </p>
      </section>

      {/* TRAINING */}
      {/* <section className="section">
        <h2 className="heading">Professional Training Programs</h2>

        <div className="grid">
          <div className="card">
            <h3>Cloud Computing</h3>
            <p>
              Practical training on cloud platforms, architecture, and real-world
              deployment strategies.
            </p>
          </div>

          <div className="card">
            <h3>Databases</h3>
            <p>
              Structured learning on SQL, NoSQL, data modeling, and performance
              optimization.
            </p>
          </div>

          <div className="card">
            <h3>AI & Machine Learning</h3>
            <p>
              From fundamentals to applied AI — designed for industry relevance
              and hands-on understanding.
            </p>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Let’s Build, Learn, and Grow Together</h2>
        <p className="cta-subtitle">
          Whether you’re a business, learner, or professional — One Vision Lab
          is built to support your growth.
        </p>

        <div className="cta-row">
          <button className="primary-btn">Contact Us</button>
          <button className="secondary-btn">Get Updates</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} One Vision Lab</p>
        <p className="footer-tagline">
          Technology • Intelligence • Clarity
        </p>
      </footer>
    </div>
  );
}
