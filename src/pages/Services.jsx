import Navbar from "../components/Navbar";
import "./Home.css"; // reuse same styles

export default function Services() {
  return (
    <div className="home">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">Our Services</h1>
        <p className="hero-subtitle">
          We design, build, and support intelligent digital solutions —
          combining modern web technologies, artificial intelligence,
          and advanced computer vision expertise.
        </p>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section">
        <h2 className="heading">What We Offer</h2>

        <div className="grid">
          <div className="card">
            <h3>Website Development</h3>
            <p>
              We build fast, secure, and scalable websites tailored to your
              business needs — from landing pages to full-scale platforms.
            </p>
            <ul className="service-list">
              <li>Custom website design</li>
              <li>Modern frontend & backend</li>
              <li>Performance optimization</li>
              <li>SEO-ready structure</li>
            </ul>
          </div>

          <div className="card">
            <h3>AI-Driven Websites</h3>
            <p>
              Intelligent web applications powered by AI to automate workflows,
              personalize user experience, and enable smarter decision-making.
            </p>
            <ul className="service-list">
              <li>AI chatbots & assistants</li>
              <li>Recommendation systems</li>
              <li>Data-driven automation</li>
              <li>Analytics & insights</li>
            </ul>
          </div>

          <div className="card">
            <h3>Computer Vision (Advanced Annotations)</h3>
            <p>
              High-quality image and video annotation services designed for
              advanced computer vision and deep learning models.
            </p>
            <ul className="service-list">
              <li>Bounding boxes & polygons</li>
              <li>Semantic & instance segmentation</li>
              <li>Video frame annotation</li>
              <li>Quality-controlled datasets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2 className="heading">Why Choose One Vision Lab?</h2>
        <p className="why-text">
          We don’t just deliver services — we focus on clarity, accuracy, and
          long-term value. Every solution is built with careful planning,
          technical depth, and real-world relevance.
          <br /><br />
          Whether you’re a startup, enterprise, or research team, our goal is
          to help you build reliable and intelligent systems.
        </p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Let’s Discuss Your Requirements</h2>
        <p className="cta-subtitle">
          Have a project in mind? We’d love to understand your vision.
        </p>

        <div className="cta-row">
          <button className="primary-btn">Contact Us</button>
          <button className="secondary-btn">Request Consultation</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} One Vision Lab</p>
        <p className="footer-tagline">
          Intelligent Solutions. Built with Precision.
        </p>
      </footer>
    </div>
  );
}
