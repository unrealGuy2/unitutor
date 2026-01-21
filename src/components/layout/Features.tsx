import { Brain, FileText, Layers } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Brain size={32} />,
      title: "Syllabus-Grounded AI",
      // UPDATED LINE BELOW:
      desc: "Unlike ChatGPT, our AI is strictly bound to the 2026 JAMB syllabus. It focuses precisely on exam requirements."
    },
    {
      icon: <FileText size={32} />,
      title: "10 Years of Past Questions",
      desc: "Access a verified library of Past Questions. Practice with time limits to simulate the real exam conditions."
    },
    {
      icon: <Layers size={32} />,
      title: "Department Focused",
      desc: "Don't get distracted. If you are a Science student, you only see Physics, Chemistry, and Biology materials."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Use UniTutor?</h2>
          <p>We built the unfair advantage for JAMBites.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}