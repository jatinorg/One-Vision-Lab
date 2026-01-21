import Navbar from "../components/Navbar";
import "./Blog.css";

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of AI in Web Development",
        category: "AI & Tech",
        excerpt: "Discover how artificial intelligence is transforming the way we build and interact with modern websites.",
        date: "Jan 20, 2026",
    },
    {
        id: 2,
        title: "Mastering Computer Vision Annotations",
        category: "Computer Vision",
        excerpt: "Learn the best practices for high-quality data labeling to train more accurate machine learning models.",
        date: "Jan 15, 2026",
    },
    {
        id: 3,
        title: "Stock Market Trends 2026: A Data-Driven Analysis",
        category: "Insights",
        excerpt: "An in-depth look at current market trends powered by statistical reasoning and real-time data.",
        date: "Jan 10, 2026",
    },
    {
        id: 4,
        title: "Cloud Computing: Scaling Your Intelligent Apps",
        category: "Cloud",
        excerpt: "How to leverage cloud architecture to ensure your AI-driven applications are scalable and performant.",
        date: "Jan 05, 2026",
    },
];

export default function Blog() {
    return (
        <div className="blog-page">
            <Navbar />

            {/* HERO SECTION */}
            <section className="blog-hero">
                <h1 className="blog-hero-title">Innovation in You</h1>
                <p className="blog-hero-subtitle">
                    Explore the latest trends in AI, Computer Vision, and Technology.
                    Our blog brings you data-driven insights and professional perspectives.
                </p>
            </section>

            {/* BLOG GRID */}
            <section className="blog-container">
                <div className="blog-grid">
                    {BLOG_POSTS.map((post) => (
                        <div key={post.id} className="blog-card">
                            <div className="blog-image-placeholder">
                                {post.category} Image
                            </div>
                            <div className="blog-content">
                                <span className="blog-category">{post.category}</span>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <a href="#" className="read-more">Read More →</a>
                                    <span style={{ fontSize: '14px', color: '#9ca3af' }}>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER (Consistent with Home) */}
            <footer className="footer">
                <p>© {new Date().getFullYear()} One Vision Lab</p>
                <p className="footer-tagline">
                    Technology • Intelligence • Clarity
                </p>
            </footer>
        </div>
    );
}
