"use client";

import { useState } from 'react';
import { FileText, Download, PlayCircle } from 'lucide-react';

export default function Classroom() {
  const [activeSubject, setActiveSubject] = useState('Physics');

  const subjects = ['Physics', 'Chemistry', 'Biology', 'General'];

  // Mock Data (Later this comes from your Database)
  const materials = [
    { id: 1, subject: 'Physics', title: 'Motion & Projectiles - 2014-2024 Past Q', type: 'pdf', size: '2.4 MB' },
    { id: 2, subject: 'Physics', title: 'Newton\'s Laws Explained', type: 'video', size: '15 Min' },
    { id: 3, subject: 'Chemistry', title: 'Organic Chemistry Basics', type: 'pdf', size: '1.8 MB' },
    { id: 4, subject: 'Biology', title: 'Cell Structure Masterclass', type: 'pdf', size: '3.1 MB' },
    { id: 5, subject: 'Physics', title: 'Waves & Optics Formula Sheet', type: 'pdf', size: '500 KB' },
    { id: 6, subject: 'General', title: 'JAMB Novel Summary (The Life Changer)', type: 'pdf', size: '1.2 MB' },
  ];

  // Filter the list based on which tab is clicked
  const filteredMaterials = materials.filter(m => m.subject === activeSubject);

  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>My Classroom</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Access your specialized JAMB materials.</p>

      {/* Subject Tabs */}
      <div className="subject-tabs">
        {subjects.map(sub => (
          <button 
            key={sub} 
            className={activeSubject === sub ? 'active' : ''}
            onClick={() => setActiveSubject(sub)}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Materials List */}
      <div className="materials-grid">
        {filteredMaterials.map((item) => (
          <div key={item.id} className="material-card">
            <div className="file-info">
              {/* Icon changes based on type (PDF vs Video) */}
              <div className="icon-wrapper">
                {item.type === 'pdf' ? (
                  <FileText size={24} color="#f43f5e" /> // Red icon for PDF
                ) : (
                  <PlayCircle size={24} color="#3b82f6" /> // Blue icon for Video
                )}
              </div>
              
              <div>
                <h4>{item.title}</h4>
                <p>{item.type.toUpperCase()} • {item.size}</p>
              </div>
            </div>
            
            <button className="download-btn" title="Download">
              <Download size={18} />
            </button>
          </div>
        ))}

        {filteredMaterials.length === 0 && (
          <p style={{ color: '#64748b', textAlign: 'center', marginTop: '40px' }}>
            No materials uploaded for {activeSubject} yet.
          </p>
        )}
      </div>
    </div>
  );
}