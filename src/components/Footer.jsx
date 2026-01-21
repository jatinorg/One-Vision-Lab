export default function Footer() {
  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--glass-border)' }}>
      <p>© {new Date().getFullYear()} One Vision Lab. All rights reserved.</p>
    </footer>
  );
}
