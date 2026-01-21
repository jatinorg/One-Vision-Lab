import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./IntelligentSolutions.css";

const IntelligentSolutions = () => {
    return (
        <div className="is-page">
            <Navbar />

            {/* Hero Section */}
            <section className="is-hero">
                <div className="is-hero-overlay" />
                <motion.div
                    className="is-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="is-glitch-text">Intelligent Solutions</h1>
                    <p className="is-hero-subtitle">Engineering Systems That Think, Decide, and Evolve</p>
                    <p className="is-hero-description">
                        Intelligent solutions combine AI, ML-Ops, statistical intelligence, and strategic automation
                        to transform data into continuous, actionable decision-making.
                    </p>
                    <div className="is-hero-btns">
                        <Link to="/contact" className="is-btn-primary">Start Building</Link>
                    </div>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="is-section is-intro">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="is-info-card glass"
                    >
                        <h2>What Are Intelligent Solutions?</h2>
                        <p>
                            Intelligent solutions are end-to-end systems that integrate data, models, operations,
                            and strategy into a single adaptive intelligence layer. These solutions operate
                            continuously, learn from outcomes, and improve performance without manual intervention.
                        </p>
                    </motion.div>

                    <div className="is-characteristics-grid">
                        {[
                            "Intelligence embedded into operations",
                            "Continuous learning and feedback loops",
                            "Real-time decision automation",
                            "Scalable and explainable systems",
                            "Strategy-driven intelligence design"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="is-char-card glass-hover"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="is-char-icon">🧩</div>
                                <p>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Features */}
            <section className="is-section">
                <div className="container">

                    {/* AI-Ops */}
                    <div className="is-feature-row">
                        <motion.div
                            className="is-feature-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">AI-Ops — Intelligent Operations</h2>
                            <p>AI-Ops applies artificial intelligence to monitor, analyze, and optimize operational environments.</p>
                            <ul className="is-list">
                                <li>Intelligent monitoring and alerting</li>
                                <li>Anomaly and failure prediction</li>
                                <li>Automated incident resolution</li>
                                <li>Operational intelligence dashboards</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="is-feature-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-box glass">
                                <span>📊 Operations Intelligence</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* ML-Ops */}
                    <div className="is-feature-row reverse">
                        <motion.div
                            className="is-feature-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">ML-Ops — Machine Learning in Production</h2>
                            <p>ML-Ops ensures machine learning models operate reliably at scale throughout their full lifecycle.</p>
                            <ul className="is-list">
                                <li>Automated training and deployment</li>
                                <li>Model versioning and reproducibility</li>
                                <li>Performance and drift monitoring</li>
                                <li>Secure and scalable ML infrastructure</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="is-feature-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-box glass">
                                <span>⚙️ ML Pipelines</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Statistical Intelligence */}
                    <div className="is-feature-row">
                        <motion.div
                            className="is-feature-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">Statistical Intelligence & Analytics</h2>
                            <p>Trustworthy AI starts with a rigorous mathematical foundation to validate predictions and quantify uncertainty.</p>
                            <ul className="is-list">
                                <li>Predictive and prescriptive analytics</li>
                                <li>Risk and uncertainty modeling</li>
                                <li>Trend detection and forecasting</li>
                                <li>Data-driven decision frameworks</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="is-feature-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-box glass">
                                <span>📈 Statistical Models</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decision Intelligence */}
                    <div className="is-feature-row reverse">
                        <motion.div
                            className="is-feature-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">Decision Intelligence & Strategy</h2>
                            <p>Automate and optimize strategic decisions by combining AI, statistics, and business logic.</p>
                            <ul className="is-list">
                                <li>Intelligent decision engines</li>
                                <li>Scenario and impact analysis</li>
                                <li>Automated recommendation systems</li>
                                <li>Strategy optimization models</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="is-feature-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-box glass">
                                <span>🧠 Strategic Engines</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Real-world Perception */}
                    <div className="is-feature-row">
                        <motion.div
                            className="is-feature-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">Visual & Sensor Intelligence</h2>
                            <p>Enable real-world perception and action using images, video, and sensor streams.</p>
                            <ul className="is-list">
                                <li>Automated visual inspection</li>
                                <li>Object detection and recognition</li>
                                <li>Pattern and anomaly detection</li>
                                <li>Real-time perception pipelines</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="is-feature-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-box glass">
                                <span>👁️ Multi-modal Sensing</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Adaptive Systems */}
                    <div className="is-feature-row reverse">
                        <motion.div
                            className="is-feature-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">Self-Learning & Adaptive Systems</h2>
                            <p>Living systems that learn continuously through feedback loops to improve evolution over time.</p>
                            <ul className="is-list">
                                <li>Continuous learning pipelines</li>
                                <li>Automated model retraining</li>
                                <li>Feedback-driven optimization</li>
                                <li>Performance evolution tracking</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="is-feature-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-box glass">
                                <span>🔁 Feedback Loops</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Governance */}
                    <div className="is-feature-row">
                        <motion.div
                            className="is-feature-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">Trust, Governance & Reliability</h2>
                            <p>Reliable and transparent intelligence with governance and accountability embedded into every layer.</p>
                            <ul className="is-list">
                                <li>Explainable and auditable models</li>
                                <li>Secure data and model pipelines</li>
                                <li>Bias and risk mitigation</li>
                                <li>Failure-resilient design</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="is-feature-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-box glass">
                                <span>🔐 Secure Governance</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Industry Solutions */}
            <section className="is-section is-industry">
                <div className="container">
                    <h2 className="center-text gradient-text">🌍 Industry-Ready Intelligent Solutions</h2>
                    <div className="is-industry-grid">
                        {[
                            "Manufacturing & Quality",
                            "Healthcare & Medical",
                            "Finance & Risk",
                            "Retail & Customer",
                            "Smart Infrastructure"
                        ].map((industry, i) => (
                            <div key={i} className="is-industry-card glass">
                                <p>{industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="is-final-cta">
                <motion.div
                    className="container center-text"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <h2>From Data to Intelligent Action</h2>
                    <p>We engineer living intelligence systems that operate autonomously, learn continuously, and scale effortlessly.</p>
                    <Link to="/contact" className="is-btn-outline">Start Your Intelligence Journey</Link>
                </motion.div>
            </section>

        </div>
    );
};

export default IntelligentSolutions;
