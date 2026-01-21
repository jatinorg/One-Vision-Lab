import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Products.css";

const PRODUCTS = [
    {
        id: 1,
        title: "VisionCore SDK",
        description: "High-performance computer vision engine for real-time object detection and tracking.",
        category: "SDK",
    },
    {
        id: 2,
        title: "IntelliStream",
        description: "Autonomous data pipeline for processing massive sensor and video streams with ease.",
        category: "Infrastructure",
    },
    {
        id: 3,
        title: "AutoLabel Pro",
        description: "AI-powered data annotation platform to accelerate your machine learning workflows.",
        category: "Platform",
    },
    {
        id: 4,
        title: "NeuralGuard",
        description: "Enterprise-grade security layer for governing and monitoring AI systems in production.",
        category: "Security",
    },
    {
        id: 5,
        title: "InsightFlow",
        description: "Predictive analytics dashboard that translates raw data into strategic business decisions.",
        category: "Analytics",
    },
    {
        id: 6,
        title: "EdgeSense",
        description: "Lightweight AI models optimized for deployment on edge devices and IoT infrastructure.",
        category: "Edge AI",
    },
];

const Products = () => {
    return (
        <div className="products-page">
            <Navbar />

            {/* Hero Section */}
            <section className="products-hero">
                <div className="products-hero-overlay" />
                <motion.div
                    className="products-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="products-title">Our Products</h1>
                    <p className="products-hero-subtitle">Intelligent Tools for a Visionary Future</p>
                    <p className="products-hero-description">
                        We build cutting-edge tools that empower businesses to harness the full potential of
                        artificial intelligence and computer vision.
                    </p>
                </motion.div>
            </section>

            {/* Product Grid */}
            <section className="products-container">
                <div className="products-grid">
                    {PRODUCTS.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="product-card glass"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="product-category">{product.category}</div>
                            <h3 className="product-title-card">{product.title}</h3>
                            <p className="product-desc">{product.description}</p>
                            <Link to="/contact" className="product-btn">Learn More</Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Our Tools */}
            <section className="products-why is-section">
                <div className="container">
                    <h2 className="center-text gradient-text">Built for Scale & Security</h2>
                    <div className="is-characteristics-grid">
                        {[
                            { title: "Seamless Integration", icon: "🔌" },
                            { title: "Cloud-Native Architecture", icon: "☁️" },
                            { title: "Enterprise Security", icon: "🛡️" },
                            { title: "High Availability", icon: "🌐" },
                        ].map((item, i) => (
                            <div key={i} className="is-char-card glass-hover">
                                <div className="is-char-icon">{item.icon}</div>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="products-final-cta">
                <motion.div
                    className="container center-text"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <h2>Ready to transform your business?</h2>
                    <p>Contact our engineers to find the right toolkit for your specific needs.</p>
                    <Link to="/contact" className="ai-btn-primary">Request a Demo</Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Products;
