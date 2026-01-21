import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./AIDrivenWebsites.css";

const AIDrivenWebsites = () => {
    return (
        <div className="ai-websites">
            <Navbar />

            {/* Hero Section */}
            <section className="ai-hero">
                <div className="ai-hero-overlay" />
                <motion.div
                    className="ai-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="ai-glitch-text">AI-Driven Websites</h1>
                    <p className="ai-hero-subtitle">Websites That Think, Learn, and Adapt</p>
                    <p className="ai-hero-description">
                        Traditional websites are static. AI-driven websites are intelligent digital systems that analyze user behavior,
                        adapt content in real time, automate decisions, and continuously optimize performance.
                    </p>
                    <div className="ai-hero-btns">
                        <Link to="/contact" className="ai-btn-primary">Start Building</Link>
                    </div>
                </motion.div>
            </section>

            {/* definition section */}
            <section className="ai-section ai-definition">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="ai-info-card glass"
                    >
                        <h2>What Is an AI-Driven Website?</h2>
                        <p>
                            An AI-driven website integrates artificial intelligence, machine learning, and statistical intelligence
                            directly into the website architecture. These systems learn from user interactions, predict intent,
                            personalize experiences, and automate workflows across the digital journey.
                        </p>
                    </motion.div>

                    <div className="ai-characteristics-grid">
                        {[
                            "Adaptive user interfaces",
                            "Real-time personalization",
                            "Predictive content delivery",
                            "Intelligent automation",
                            "Continuous performance optimization"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="ai-char-card glass-hover"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="ai-char-icon">⚡</div>
                                <p>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Features */}
            <section className="ai-section">
                <div className="container">
                    {/* Personalization */}
                    <div className="ai-feature-row">
                        <motion.div
                            className="ai-feature-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">Intelligent Personalization & User Experience</h2>
                            <p>AI-driven websites personalize content, layout, and interactions based on user behavior, preferences, and context.</p>
                            <ul className="ai-list">
                                <li>Dynamic content recommendations</li>
                                <li>Personalized landing pages</li>
                                <li>Behavioral segmentation</li>
                                <li>Adaptive UI/UX flows</li>
                                <li>Context-aware experiences</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="ai-feature-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="/assets/original-e58a12df6da1977d5436fb46bb64f944.webp" alt="Personalization" className="glass-img" />
                        </motion.div>
                    </div>

                    {/* Analytics */}
                    <div className="ai-feature-row reverse">
                        <motion.div
                            className="ai-feature-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">Behavioral Analytics & Decision Intelligence</h2>
                            <p>Beyond basic analytics, AI-driven websites analyze user patterns and translate behavior into actionable insights.</p>
                            <ul className="ai-list">
                                <li>Funnel optimization</li>
                                <li>Conversion prediction</li>
                                <li>Drop-off detection</li>
                                <li>User intent modeling</li>
                                <li>Data-driven design decisions</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="ai-feature-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img src="/assets/aiops_dashboard_to_monitor_it_operations_artificial_intelligence_in_it_operations_slide01.jpg" alt="Analytics" className="glass-img" />
                        </motion.div>
                    </div>

                    {/* Automation */}
                    <div className="ai-feature-row">
                        <motion.div
                            className="ai-feature-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="gradient-text">AI-Powered Automation</h2>
                            <p>Automation allows websites to operate intelligently without manual intervention.</p>
                            <ul className="ai-list">
                                <li>AI chatbots and virtual assistants</li>
                                <li>Automated lead qualification</li>
                                <li>Intelligent form processing</li>
                                <li>Content scheduling and optimization</li>
                                <li>Smart notifications and responses</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="ai-feature-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-box glass">
                                <span>🤖 Automation Engine</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Grid Sections */}
            <section className="ai-section ai-optimization-grid">
                <div className="container">
                    <div className="ai-grid-2">
                        <motion.div className="ai-card-flat glass" whileHover={{ y: -5 }}>
                            <h3>Self-Optimizing Web Systems</h3>
                            <p>AI-driven websites continuously learn and improve by analyzing outcomes and adjusting strategies automatically.</p>
                            <div className="ai-tag-group">
                                <span>A/B Testing</span>
                                <span>Layout Optimization</span>
                                <span>Speed Tuning</span>
                                <span>Engagement Scoring</span>
                            </div>
                        </motion.div>
                        <motion.div className="ai-card-flat glass" whileHover={{ y: -5 }}>
                            <h3>Predictive & Recommendation Systems</h3>
                            <p>Predictive models anticipate user actions and deliver the right content at the right moment.</p>
                            <div className="ai-tag-group">
                                <span>Product Recommendations</span>
                                <span>Predictive Search</span>
                                <span>Journey Forecasting</span>
                                <span>Intelligent Onboarding</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Security & Architecture */}
            <section className="ai-section ai-tech-stack">
                <div className="container">
                    <div className="ai-feature-row">
                        <div className="ai-feature-text">
                            <h2 className="gradient-text">Security, Trust & Ethical AI</h2>
                            <ul className="ai-list">
                                <li>Secure data handling</li>
                                <li>Privacy-aware personalization</li>
                                <li>Explainable AI decisions</li>
                                <li>Bias-aware models</li>
                            </ul>
                        </div>
                        <div className="ai-feature-text">
                            <h2 className="gradient-text">Scalable, Cloud-Native Architecture</h2>
                            <ul className="ai-list">
                                <li>Cloud-native deployment</li>
                                <li>API-driven intelligence layers</li>
                                <li>Real-time data pipelines</li>
                                <li>Edge-AI for performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Impact */}
            <section className="ai-section ai-impact">
                <div className="container">
                    <h2 className="center-text gradient-text">Business Impact</h2>
                    <div className="ai-impact-grid">
                        {[
                            { val: "↑ Engagement", desc: "Higher retention rates" },
                            { val: "↑ Conversion", desc: "Optimized user journeys" },
                            { val: "↓ Ops", desc: "Reduced manual operations" },
                            { val: "↑ Velocity", desc: "Faster decision making" }
                        ].map((item, i) => (
                            <div key={i} className="ai-impact-card glass">
                                <h4>{item.val}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="ai-section ai-approach">
                <div className="container">
                    <h2 className="center-text white-text">Our Development Approach</h2>
                    <div className="ai-steps">
                        {[
                            "Discovery & Intelligence Mapping",
                            "Data & Behavior Modeling",
                            "AI Architecture Design",
                            "Development & Integration",
                            "Continuous Learning & Optimization"
                        ].map((step, i) => (
                            <div key={i} className="ai-step">
                                <div className="ai-step-num">{i + 1}</div>
                                <p>{step}</p>
                            </div>
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
                    <h2>The Future of Web Experiences</h2>
                    <p>AI-driven websites evolve with users. They sense intent, adapt in real time, and become strategic digital assets.</p>
                    <Link to="/contact" className="ai-btn-outline">Build Your Intelligent Platform</Link>
                </motion.div>
            </section>
        </div>
    );
};

export default AIDrivenWebsites;
