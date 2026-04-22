import React, { useState } from 'react';
import { Code, GitBranch, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const PhaseTwo = ({ onNext }) => {
  const [step, setStep] = useState(1);
  const [accuracy, setAccuracy] = useState(70);
  const [capstone, setCapstone] = useState(null);

  const applyOptimization = (type) => {
    if (accuracy >= 95) return;
    
    let boost = 0;
    if (type === 'hyperparams') boost = 10;
    if (type === 'data') boost = 15;
    
    const newAccuracy = Math.min(95, accuracy + boost);
    setAccuracy(newAccuracy);
    
    if (newAccuracy >= 95) {
      setTimeout(() => setStep(2), 1500);
    }
  };

  return (
    <div className="phase-container">
      <div className="animate-fade-in text-center">
        <h2>Phase 2: Integration (Days 60-90)</h2>
        <p>Independent work and final capstone project.</p>
      </div>

      {step === 1 && (
        <div className="glass-panel puzzle-area animate-fade-in delay-100">
          <div style={{ textAlign: 'center' }}>
            <Code size={48} className="mission-icon" />
            <h3>Mini-game 3: Model Optimization</h3>
            <p>Our sentiment classifier is currently at 70% accuracy. Apply optimizations to reach the 95% target!</p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '8px', marginTop: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: accuracy >= 95 ? 'var(--success)' : 'var(--primary)', fontFamily: 'monospace' }}>
              {accuracy}%
            </div>
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginTop: '1rem', overflow: 'hidden' }}>
              <div style={{ width: `${accuracy}%`, height: '100%', background: accuracy >= 95 ? 'var(--success)' : 'var(--primary)', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <button className="btn btn-secondary" onClick={() => applyOptimization('hyperparams')} disabled={accuracy >= 95}>
              <Zap size={16} /> Tune Hyperparameters
            </button>
            <button className="btn btn-secondary" onClick={() => applyOptimization('data')} disabled={accuracy >= 95}>
              <Database size={16} /> Augment Training Data
            </button>
          </div>

          {accuracy >= 95 && (
            <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--success)', marginTop: '1rem', fontWeight: 'bold' }}>
              <CheckCircle size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }}/>
              Target Accuracy Achieved!
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="glass-panel puzzle-area animate-fade-in">
          <div style={{ textAlign: 'center' }}>
            <GitBranch size={48} className="mission-icon" />
            <h3>Mini-game 4: Capstone Project Selection</h3>
            <p>Choose an industry vertical for your final capstone project at Echo Logic.</p>
          </div>

          <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            {['Healthcare Assistant', 'Financial Advisor Bot', 'E-Commerce Support'].map((proj) => (
              <button 
                key={proj}
                className={`btn ${capstone === proj ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '2rem', flexDirection: 'column', height: 'auto', textAlign: 'center' }}
                onClick={() => {
                  setCapstone(proj);
                  setTimeout(() => setStep(3), 1500);
                }}
              >
                {proj}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="glass-panel puzzle-area animate-fade-in">
          <div style={{ textAlign: 'center' }}>
            <CheckCircle size={48} className="mission-icon" style={{ color: 'var(--success)' }} />
            <h3>Phase 2 Complete!</h3>
            <p>You optimized the core models and selected your Capstone Project: <strong>{capstone}</strong>.</p>
            <p style={{ color: 'var(--primary)', marginTop: '1rem', fontStyle: 'italic' }}>Performance Review: "Outstanding work integrating with the team."</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button className="btn btn-primary" onClick={onNext}>
              View Final Assessment <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple Database icon since it's used in PhaseTwo
const Database = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

export default PhaseTwo;
