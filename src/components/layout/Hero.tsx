import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">🚀 JAMB 2026 Masterclass</div>
        <h1>
          Master the <span className="highlight">JAMB Syllabus</span> <br />
          with AI-Powered Tutoring.
        </h1>
        {/* UPDATED PARAGRAPH BELOW */}
        <p>
          Don't just read. Interact. Access thousands of past questions and get instant explanations from an AI Tutor trained on the official JAMB standard.
        </p>
        <div className="cta-group">
          <Link href="/register" className="btn btn-primary btn-lg">
            Start Learning Now
          </Link>
          <Link href="/login" className="btn btn-outline btn-lg">
            View Syllabus
          </Link>
        </div>
      </div>
      
      {/* This div creates the background glow effect */}
      <div className="hero-glow"></div>
    </section>
  );
}