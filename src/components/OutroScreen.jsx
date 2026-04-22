import React from 'react';
import { Award, Star, TrendingUp } from 'lucide-react';

const OutroScreen = () => {
  return (
    <div className="phase-container" style={{ justifyContent: 'center' }}>
      <div className="glass-panel puzzle-area animate-fade-in" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <Award size={80} style={{ color: 'var(--accent)', margin: '0 auto 2rem auto' }} />
        
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Onboarding Complete!</h1>
        
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
          Congratulations on completing your 90-day onboarding journey at Echo Logic. You are now fully integrated and ready to make a massive impact.
        </p>
        
        <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
              <Star size={24} />
              <h3 style={{ margin: 0 }}>Final 360 Assessment</h3>
            </div>
            <p style={{ margin: 0 }}>
              "Demonstrates exceptional grasp of NLP pipelines and aligns perfectly with our core value of Intelligence. Ready for advanced assignments."
            </p>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--success)' }}>
              <TrendingUp size={24} />
              <h3 style={{ margin: 0 }}>Next Steps</h3>
            </div>
            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', margin: 0, lineHeight: 1.6 }}>
              <li>Lead the upcoming Capstone deployment</li>
              <li>Present findings at the quarterly AI summit</li>
              <li>Mentor the next cohort of interns</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '4rem', color: 'var(--text-muted)' }}>
          <p>Thank you for playing the Echo Logic Onboarding Quest.</p>
        </div>
      </div>
    </div>
  );
};

export default OutroScreen;
