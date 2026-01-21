import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const benefits = [
    "Unlimited AI Tutor Access (JAMB Syllabus)",
    "10 Years of Post-UTME Past Questions",
    "Department-Specific Study Materials",
    "24/7 Access until Admission List is out"
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-card">
          <div className="label">ONE-TIME PAYMENT</div>
          <h2>Unlock Your Admission</h2>
          <div className="price">
            <span className="currency">₦</span>2,000
            <span className="period">/ session</span>
          </div>
          
          <ul className="benefits-list">
            {benefits.map((item, index) => (
              <li key={index}>
                <CheckCircle size={20} className="icon" />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/register" className="btn btn-primary btn-block">
            Get Full Access Now
          </Link>
          <p className="guarantee">Secure payment via Paystack</p>
        </div>
      </div>
    </section>
  );
}